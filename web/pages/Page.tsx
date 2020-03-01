import { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import client from '../client'
import Layout from '../components/Layout'
import { InitialLoadContext } from '../context/initialLoad'
import subpageQuery from '../queries/subpage'

const Page: NextPage<{ config: any; content: any }> = ({ config, content }) => {
  const [mounted, setMounted] = useState(false)
  const [initialLoad, setInitialLoad] = useState(false)

  console.log(content)

  useEffect(() => {
    setMounted(true)

    const timeout = setTimeout(() => {
      setInitialLoad(true)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

  if (!mounted && process.browser) return null

  return (
    <>
      <Head>
        <title>Appear</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InitialLoadContext.Provider value={initialLoad}>
        <Layout config={config}></Layout>
      </InitialLoadContext.Provider>
    </>
  )
}

Page.getInitialProps = async ({ query }: { query: any }) => {
  const { slug } = query
  if (!query) {
    console.error('no query')
    return
  }
  if (slug && slug !== '/') {
    return client.fetch(subpageQuery, { slug }).then((res: any) => ({ ...res.page, slug }))
  }

  return null
}

export default Page

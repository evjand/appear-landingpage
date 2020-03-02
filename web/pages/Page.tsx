import { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import client from '../client'
import Layout from '../components/Layout'
import { InitialLoadContext } from '../context/initialLoad'
import subpageQuery from '../queries/subpage'
import BlockContent from '@sanity/block-content-to-react'
import Container from '../components/Container'

const renderSection = section => {
  switch (section._type) {
    case 'textSection':
      return (
        <>
          <h1>{section.heading}</h1>
          <BlockContent blocks={section.text} />
        </>
      )
    case 'imageSection':
      return (
        <>
          <h1>{section.heading}</h1>
          <img src={section.image.asset.url} alt="" />
          <BlockContent blocks={section.text} />
        </>
      )
    default:
      return ''
  }
}

const Page: NextPage<{ config: any; content: any }> = ({ config, content }) => {
  const [mounted, setMounted] = useState(false)
  const [initialLoad, setInitialLoad] = useState(false)

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
        <Layout config={config}>
          <Container>{content.map(section => renderSection(section))}</Container>
        </Layout>
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

import { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import client from '../client'
import DemoSection from '../components/frontpageSections/DemoSection'
import FeaturesSection from '../components/frontpageSections/FeaturesSection'
import FooterHeroSection from '../components/frontpageSections/FooterHeroSection'
import GettingStartedSection from '../components/frontpageSections/GettingStartedSection'
import HeroSection from '../components/frontpageSections/HeroSection'
import InvolvedSection from '../components/frontpageSections/InvolvedSection'
import UsersSection from '../components/frontpageSections/UsersSection'
import Layout from '../components/Layout'
import { InitialLoadContext } from '../context/initialLoad'
import frontpageQuery from '../queries/frontpage.js'
/*const pageQuery = groq`
*[_type == "route" && slug.current == $slug][0]{
  page-> {
    ...,
    content[] {
      ...,
      cta {
        ...,
        route->
      },
      ctas[] {
        ...,
        route->
      }
    }
  }
}
`*/

const Home: NextPage<{ config: any; content: any }> = ({ config, content }) => {
  const [mounted, setMounted] = useState(false)
  const [initialLoad, setInitialLoad] = useState(false)

  const hero = content.find((c: any) => c._type === 'heroSection')
  const demo = content.find((c: any) => c._type === 'demoSection')
  const gettingStarted = content.find((c: any) => c._type === 'gettingStartedSection')
  const features = content.find((c: any) => c._type === 'featuresSection')

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
          <HeroSection {...hero} />
          <DemoSection {...demo} />
          <GettingStartedSection {...gettingStarted} />
          <FeaturesSection {...features} />
          <UsersSection />
          <InvolvedSection />
          <FooterHeroSection />
        </Layout>
      </InitialLoadContext.Provider>
    </>
  )
}

Home.getInitialProps = async ({ query }: { query: any }) => {
  const { slug } = query
  if (!query) {
    console.error('no query')
    return
  }
  /*if (slug && slug !== '/') {
    return client.fetch(pageQuery, { slug }).then((res: any) => ({ ...res.page, slug }))
  }*/

  // Frontpage
  if (slug && slug === '/') {
    return client.fetch(frontpageQuery).then((res: any) => ({ ...res.frontpage, slug }))
  }

  return null
}

export default Home

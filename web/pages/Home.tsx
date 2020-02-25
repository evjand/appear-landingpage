import Head from 'next/head'
import groq from 'groq'
import client from '../client'
import Layout from '../components/Layout'
import HeroSection from '../components/frontpageSections/HeroSection'
import DemoSection from '../components/frontpageSections/DemoSection'
import GettingStartedSection from '../components/frontpageSections/GettingStartedSection'
import FeaturesSection from '../components/frontpageSections/FeaturesSection'
import UsersSection from '../components/frontpageSections/UsersSection'
import InvolvedSection from '../components/frontpageSections/InvolvedSection'
import FooterHeroSection from '../components/frontpageSections/FooterHeroSection'
import { useState, useEffect } from 'react'
import { InitialLoadContext } from '../context/initialLoad'

const pageQuery = groq`
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
`

const Home = ({ config }: { config: any }) => {
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
          <HeroSection />
          <DemoSection />
          <GettingStartedSection />
          <FeaturesSection />
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
  if (slug && slug !== '/') {
    return client.fetch(pageQuery, { slug }).then((res: any) => ({ ...res.page, slug }))
  }

  // Frontpage
  if (slug && slug === '/') {
    return client
      .fetch(
        groq`
      *[_id == "global-config"][0]{
        frontpage -> {
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
    `
      )
      .then((res: any) => ({ ...res.frontpage, slug }))
  }

  return null
}

export default Home

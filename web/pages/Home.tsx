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
import { useState, useEffect, useLayoutEffect } from 'react'

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

  useLayoutEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted && process.browser) return null

  return (
    <div style={{ opacity: mounted ? 1 : 1, transition: 'opacity 1s ease' }}>
      <Head>
        <title>Appear</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout config={config}>
        <HeroSection />
        <DemoSection />
        <GettingStartedSection />
        <FeaturesSection />
        <UsersSection />
        <InvolvedSection />
        <FooterHeroSection />
      </Layout>
    </div>
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

import Head from 'next/head'
import groq from 'groq'
import client from '../client'

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

const Home = () => (
  <div className="container">
    <Head>
      <title>Appear</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>Hallo</h1>
  </div>
)

Home.getInitialProps = async ({ query }) => {
  const { slug } = query
  if (!query) {
    console.error('no query')
    return
  }
  if (slug && slug !== '/') {
    return client.fetch(pageQuery, { slug }).then(res => ({ ...res.page, slug }))
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
      .then(res => ({ ...res.frontpage, slug }))
  }

  return null
}

export default Home

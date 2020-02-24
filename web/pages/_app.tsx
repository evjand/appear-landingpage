import React from 'react'
import BaseApp, { AppContext } from 'next/app'
import client from '../client'
import '../styles/main.css'
import { NextPage, NextPageContext } from 'next'

const siteConfigQuery = `
  *[_id == "global-config"] {
    ...,
    logo {asset->{extension, url}},
    mainNavigation[] -> {
      ...,
      "title": page->title
    },
    footerNavigation[] -> {
      ...,
      "title": page->title
    }
  }[0]
  `

class App extends BaseApp {
  static async getInitialProps({ Component, ctx }: { Component: NextPage; ctx: NextPageContext }) {
    let pageProps: { config?: any } = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // Add site config from sanity
    return client.fetch(siteConfigQuery).then((config: any) => {
      if (!config) {
        return { pageProps }
      }
      if (config && pageProps) {
        pageProps.config = config
      }

      return { pageProps }
    })
  }

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default App

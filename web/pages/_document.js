import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import client from '../client'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return client.fetch('*[_id == "global-config"] {lang}.lang[0]').then(lang => {
      return { ...initialProps, lang }
    })
  }

  render() {
    return (
      <Html lang={this.props.lang || 'en'}>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://fontlibrary.org/face/hk-grotesk" type="text/css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
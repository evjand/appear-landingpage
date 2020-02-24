import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import client from '../client'

export default class MyDocument extends Document<{ lang: string }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return client.fetch('*[_id == "global-config"] {lang}.lang[0]').then((lang: string = 'en') => {
      return { ...initialProps, lang }
    })
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Fira+Code:500&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://fontlibrary.org/face/hk-grotesk" type="text/css" />
          <link rel="stylesheet" href="https://unpkg.com/@coreui/icons/css/brand.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

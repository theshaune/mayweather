import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {
    font-family: 'Oswald';
    src: url('/static/oswald-bold-webfont.woff2') format('woff2'),
         url('/static/oswald-bold-webfont.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Anonymous Pro';
    src: url('/static/anonymous_pro_b-webfont.woff2') format('woff2'),
         url('/static/anonymous_pro_b-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html{
    font-size: 14px;
    height: 100%;
    overflow-y: hidden;
  }

  body {
    min-height: 100%;
    background-color: rgb(241, 241, 238);
    box-shadow: inset 0px 0px 0px 3px #ff0000;
    color: rgb(58, 58, 58);
    font-family: 'Anonymous Pro', monospace;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
  }
`

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>Smack Talk Generator</title>
          <link rel="icon" type="image/png" href="/static/favicon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:site_name" content="👊 The Smack Talk Generator" />
          <meta property="og:title" content="👊 The Smack Talk Generator" />
          <meta property="og:url" content="https://thesmacktalkgenerator.com" />
          {styleTags}
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}

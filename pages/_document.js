import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { Provider } from 'rebass'
import theme from '../components/theme.js'

export default class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>My page</title>
          {styleTags}

          <script src='/static/js/google-calls.js'></script>
        </Head>
        <body>
          <Provider theme={theme} className='root'>
            {main}
          </Provider>
          <NextScript />
        </body>
      </html>
    )
  }
}

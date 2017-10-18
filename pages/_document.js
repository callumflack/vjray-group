import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <script>dataLayer = [];</script>
          <script src="/static/js/google-tag-manager.js" />
          <title>My page</title>
          {this.props.styleTags}
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TNFDHLZ" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`
            }}
          />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

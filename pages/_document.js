import "core-js/es6/map";
import "core-js/es6/set";
import Browser from "your-browser-sucks";
import NoSSR from "react-no-ssr";

import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  componentDidMount() {
    // Display a warning message if cilent is using IE 11 or below
    // React has compatibility issues with IE 11 or below
    const ua = window.navigator.userAgent;
    if (ua.indexOf("MSIE") >= 0) {
      alert(
        `The VJ Ray Strata website doesn't work well on old Microsoft Internet Explorer browsers. Please use Microsoft Edge instead.`
      );
    }
  }

  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleTags();

    return (
      <html lang="en">
        <Head>
          {/* Initialize dataLayer array for google tag manager */}
          <script>dataLayer = [];</script>
          <script src="/static/js/google-tag-manager.js" />
          <title>My page</title>
          <style dangerouslySetInnerHTML={{ __html: styleTags }} />
        </Head>
        <body>
          {/* Unsupported browser detection */}
          <NoSSR>
            <Browser />
          </NoSSR>

          {/* GTM */}
          <noscript
            dangerouslySetInnerHTML={{
              __html:
                '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TNFDHLZ" height="0" width="0" style="display:none;visibility:hidden;"></iframe>'
            }}
          />
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </html>
    );
  }
}

import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { Provider } from "rebass";
import theme from "./theme-new";
import globalStyles from "./global";
import { site } from "./constants";

// https://github.com/zeit/next.js/blob/master/examples/layout-component/components/layout.js
// http://jxnblk.com/rebass/theming

const Layout = ({ children }) => (
  <Provider theme={theme}>
    <div>
      <Head>
        <title>
          {site === "strata"
            ? "VJ Ray Strata Management, Sydney"
            : "VJ Ray Real Estate Management Services, Sydney"}
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {children}
    </div>
  </Provider>
);

Layout.propTypes = {
  children: PropTypes.element,
};

Layout.defaultProps = {
  children: "",
};

export default Layout;

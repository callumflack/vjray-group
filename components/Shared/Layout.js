import Head from 'next/head'
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components'
import theme from '../theme';
import globalStyles from './global'


// https://github.com/zeit/next.js/blob/master/examples/layout-component/components/layout.js

const Root = props => (
  <ThemeProvider theme={ theme }>
    <div>
      <Head>
        <title>{ props.title }</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name="google-site-verification" content="JizkFkWaLwMcZOtA0K-Mpo3iwamP4eYMmruKSGnpB6o" />
      </Head>

      { props.children }

    </div>
  </ThemeProvider>
);

class Layout extends React.Component {
  componentDidMount() {
    (function(a,e,c,f,g,h,b,d){var k={ak:"1049342091",cl:"ZIh-COTdrXUQi-Gu9AM",autoreplace:"1300073405"};a[c]=a[c]||function(){(a[c].q=a[c].q||[]).push(arguments)};a[g]||(a[g]=k.ak);b=e.createElement(h);b.async=1;b.src="//www.gstatic.com/wcm/loader.js";d=e.getElementsByTagName(h)[0];d.parentNode.insertBefore(b,d);a[f]=function(b,d,e){a[c](2,b,k,d,null,new Date,e)};a[f]()})(window,document,"_googWcmImpl","_googWcmGet","_googWcmAk","script");
  }

  render() {
    return <Root {...this.props} />
  }
}

Layout.propsTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

Layout.defaultProps = {
  title: 'VJ Ray Strata Management, Sydney',
};

export default Layout

import React from 'react'
import fetchMarkdown from '../lib/fetch-markdown.js'
import theme from '../components/theme.js'
import { Box } from 'rebass'
import Layout from '../components/Shared/Layout'
import { TextBlock } from '../components/Shared/Text'
import Header from '../components/Shared/Header'
import Footer from '../components/Shared/FooterGroup'
import BlockWrapper from '../components/Shared/BlockWrapper'


const Root = props => (
  <Layout>
    <Header clear />

    <Box style={{ marginTop: '45px' }}>
      <BlockWrapper maxWidth='42em'>
        <TextBlock dangerouslySetInnerHTML={{__html: props.privacy.body.html}} />
      </BlockWrapper>
    </Box>

    <Footer />
  </Layout>
)

class TermsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ req, pathname }) {
    const privacy = await fetchMarkdown(req, 'privacy');

    return {
      privacy,
      pathname
    }
  }

  render() {
    return (
      <Root {...this.props} />
    )
  }
}

export default TermsPage;
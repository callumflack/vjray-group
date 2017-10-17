import React from 'react'
import fetchMarkdown from '../lib/fetch-markdown.js'
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
        <TextBlock dangerouslySetInnerHTML={{__html: props.terms.body.html}} />
      </BlockWrapper>
    </Box>

    <Footer />
  </Layout>
)

class TermsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ pathname }) {
    const terms = await fetchMarkdown('terms');

    return {
      terms,
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

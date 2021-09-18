import React from "react";
import { Box } from "rebass";
import Layout from "../components/Layout";
import { TextBlock } from "../components/Text";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlockWrapper from "../components/BlockWrapper";
import Terms from "../components/content/terms.mdx";

const Root = () => (
  <Layout>
    <Header clear />

    <Box style={{ marginTop: "45px" }}>
      <BlockWrapper maxWidth="42em" textLeft>
        <TextBlock>
          <Terms />
        </TextBlock>
      </BlockWrapper>
    </Box>

    <Footer />
  </Layout>
);

class TermsPage extends React.Component {
  static async getInitialProps({ pathname }) {
    return {
      pathname,
    };
  }

  render() {
    return <Root {...this.props} />;
  }
}

export default TermsPage;

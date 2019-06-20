import React from "react";
import { Box } from "rebass";
import Layout from "../components/Shared/Layout";
import { TextBlock } from "../components/Shared/Text";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";
import BlockWrapper from "../components/Shared/BlockWrapper";
import Privacy from "../components/content/privacy.mdx";

const Root = () => (
  <Layout>
    <Header clear />

    <Box style={{ marginTop: "45px" }}>
      <BlockWrapper maxWidth="42em" textLeft>
        <TextBlock>
          <Privacy />
        </TextBlock>
      </BlockWrapper>
    </Box>

    <Footer />
  </Layout>
);

class PrivacyPage extends React.Component {
  static async getInitialProps({ pathname }) {
    return {
      pathname,
    };
  }

  render() {
    return <Root {...this.props} />;
  }
}

export default PrivacyPage;

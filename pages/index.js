import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Flex, Box } from "rebass";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Block from "../components/Block";
import BlockWrapper from "../components/BlockWrapper";
import HGroup from "../components/HGroup";
import HeroGroupHome from "../components/HeroGroupHome";
import HeroGroupHomeStrata from "../components/HeroGroupHomeStrata";
import FeatureList from "../components/FeatureList";
import ContactForms from "../components/ContactForms";
import { Text, AuthorText, TextBlock } from "../components/Texts";
import LineBreak from "../components/LineBreak";
import theme from "../components/theme-new";

import Letter from "../components/content/letter.mdx";

const TextBlockWrapper = styled(Flex)`
  margin-top: 0;
  margin-bottom: ${theme.space[4]}px;
  @media (min-width: ${theme.breakpoints[0]}) {
    margin: 0;
  }
`;

const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear linkToStrata />

    <HeroGroupHome />

    <BlockWrapper maxWidth="80em">
      <HGroup
        crownWidth="42em"
        title="We specialise in Real Estate Management services."
        titleFamily="displayMedium"
        titleColor="brand"
        text={
          <span>
            “We&apos;re extremely happy with the service that&nbsp;
            <LineBreak break={["inline", "block"]}>
              VJ Ray provides”&nbsp;
              <AuthorText>— Neil, Caringbah</AuthorText>
            </LineBreak>
          </span>
        }
      />
      <FeatureList />
    </BlockWrapper>

    <HeroGroupHomeStrata
      subhead="Strata Management"
      title="We believe in better Strata Management for Sydney."
      text="It's said that by 2020, over 50% of Sydney's population will be living or working in a Strata property. That's why we believe Sydney needs a Strata Manager that focuses on the people as well as the property."
    />

    <BlockWrapper bg="text7" maxWidth="48em">
      <HGroup
        crownWidth="40em"
        title="Our duty is your satisfaction."
        titleColor="text"
        textColor="brand"
      />
      <Flex mx={[-2, -2, -2, -3]} mt={5}>
        <TextBlockWrapper
          mx="auto"
          px={[2, 2, 2, 3]}
          width={[1, 1, 2 / 3]}
        >
          <TextBlock>
            <Letter />
          </TextBlock>
        </TextBlockWrapper>
      </Flex>
    </BlockWrapper>

    <Block
      maxWidth="38em"
      subhead="Contact us"
      subheadColor="text70"
      title="How can we help?"
      titleColor="brand"
    >
      <ContactForms defaultForm={props.defaultForm} />
    </Block>

    <Footer />
  </Layout>
);

class Index extends React.Component {
  static async getInitialProps({ pathname, query }) {
    return {
      pathname,
      defaultForm: query.form,
    };
  }

  render() {
    return <Root {...this.props} />;
  }
}

// defaultForm: PropTypes.string,
Index.propTypes = {
  maxWidth: PropTypes.string,
  pathname: PropTypes.string,
};

Index.defaultProps = {
  pathname: "/",
};

export default Index;

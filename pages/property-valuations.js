import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { Flex, Box } from "rebass";
import theme from "../components/theme-new";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Block from "../components/Block";
import BlockWrapper from "../components/BlockWrapper";
import HeroBlock from "../components/HeroBlock";
import HGroup from "../components/HGroup";
import { FormHeader } from "../components/Form";
import FormContact from "../components/FormContact";

import { valuationsList } from "../components/constants";
import ListItem from "../components/ListItem";
import { LargeText, AuthorText } from "../components/Texts";

const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear />

    <HeroBlock
      bluegreyGradientBg
      img="https://res.cloudinary.com/pw-img-cdn/image/upload/v1512092045/ashley-hero_kirnow.png"
    >
      <HGroup
        title="Trust the price. Qualified valuations done right."
        titleColor="brand"
        titleFamily="displayMedium"
        titleIs="h1"
        text="Get a legal estimate of your property's value from our local, experienced team."
        textColor="text70"
      />
    </HeroBlock>

    <BlockWrapper maxWidth="44em" textLeft>
      <HGroup
        heading="We specialise in Sydney property valuations."
        headingFamily="displayMedium"
        textIsLast
        textLeft
        text="With over 50 years of providing valuations in Sydney plus access to the most up to date property data, we can help you with your valuation. The question is, when do you need one?"
      />
      <Box my={5}>
        {valuationsList.map((item, i) => (
          <ListItem smallSpace item={item} key={i} />
        ))}
      </Box>
      <LargeText color="text70">
        If you need to trust your price, tell us a little about it and
        we&apos;ll make sure you get your worth:
      </LargeText>
      <FormHeader bg="brand" color="white" mt={[3, 4, 5]}>
        Order a valuation
      </FormHeader>
      <FormContact border defaultForm={props.defaultForm} />
    </BlockWrapper>

    <Footer />
  </Layout>
);

class ValuationsPage extends React.Component {
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

export default ValuationsPage;

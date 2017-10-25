import React from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { Flex, Box } from 'rebass'
import theme from '../components/theme-new'

import Layout from '../components/Shared/Layout'
import Header from '../components/Shared/Header'
import Footer from '../components/Shared/FooterGroup'
import Block from "../components/Shared/Block";
import HeroBlock from "../components/Shared/HeroBlock";
import HGroup from "../components/Shared/HGroup";

import icons from "../components/Shared/iconConstants";
import { strataIntro, strataList } from "../components/constants";
import IconListItem from "../components/Shared/IconListItem";
import { LargeText, AuthorText, PrimaryButtonText } from "../components/Shared/Texts";
import LineBreak from "../components/Shared/LineBreak";
import { Button } from "../components/Shared/Buttons";


const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear linkToStrata />

    <HeroBlock
      bg="beige"
      img="http://res.cloudinary.com/pw-img-cdn/image/upload/v1507788260/hero-home-171012_epyqlz.jpg"
    >
      <HGroup
        title="Skip the hassle of Strata Management."
        titleColor="brand"
        titleFamily="displayMedium"
        titleIs="h1"
        text="At VJ Ray Strata, we understand how valuable your peace of mind is."
        textColor="text70"
      />
    </HeroBlock>

    <Block
      maxWidth="44em"
      heading="It all adds up to a better deal."
      headingFamily="displayMedium"
      textIsLast
      textLeft
      text="We do everything you’d expect: arrange meetings, collect levies, manage repairs and help with disputes. And we believe it shouldn’t stop there. Here’s how we go further for your peace of mind:"
    >
      <Box my={5}>
        {strataList.map((item, i) => (
          <IconListItem smallSpace item={item} key={i} />
        ))}
      </Box>
      <LargeText 
        color="text70"
        children="If you'd like a Strata Manager that focuses on you as
        well as your property, visit our Strata website:"
      />
      <Link href="https://vjraystrata.com.au/">
        <PrimaryButtonText center mt={5}>
          <Button icon bg="brand" children="Our Strata website" />
        </PrimaryButtonText>
      </Link>
    </Block>

    <Footer />
  </Layout>
);

class StrataPage extends React.Component {
  static async getInitialProps({ pathname, query }) {
    return {
      pathname,
      defaultForm: query.form,
    }
  }

  render() {
    return <Root {...this.props} />;
  }
}

export default StrataPage
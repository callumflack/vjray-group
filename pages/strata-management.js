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
import { AuthorText, PrimaryButtonText } from "../components/Shared/Texts";
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
        subhead="We make it easy"
        subheadColor="brand"
        title="Skip the hassle of Strata Management."
        titleColor="brand"
        text="At VJ Ray Strata, we understand how valuable your peace of mind is."
        largeTextColor="text"
      />
    </HeroBlock>

    <Block
      maxWidth="48em"
      noBottomPadding
      title="It all adds up to a better deal."
      titleFamily="displayMedium"
      text={<span>"You guys are very quick to respond and handle things efficiently, no complaints here!"&nbsp;<LineBreak><AuthorText>— Terry & Linda, Caringbah</AuthorText></LineBreak></span>}
      textIsLast
    />

    <Block maxWidth="48em" noBottomPadding>
      {strataList.map((item, i) => <IconListItem item={item} key={i} />)}
    </Block>

    <Block maxWidth="38em" subhead="Find out more">
      <Link href="/emergency">
        <PrimaryButtonText center>
          <Button icon bg="brand" children="Visit VJ Ray Strata" />
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
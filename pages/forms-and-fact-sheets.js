import React from 'react'
import Link from 'next/link';
import styled, { css } from 'styled-components'
import { Box, Flex } from 'rebass'
import Layout from '../components/Shared/Layout'
import Header from '../components/Shared/Header'

import HeroBlock from '../components/Shared/HeroBlock'
import HGroup from '../components/Shared/HGroup'
import Block from '../components/Shared/Block'
import { HeroBox, HeroContainer, HeroFlex, HeroTitleBox } from "../components/Shared/Hero";

import Contacts from '../components/Shared/Contacts'
import Footer from '../components/Shared/FooterGroup'
import { LargeText, Text } from '../components/Shared/Texts'
import { forms, factSheets } from '../components/constants'
import theme from "../components/theme-new";


const ListItemRoot = styled(Box)`
  border-bottom: 1px solid ${theme.colors.text20};
`;

const StyledHeroBox = styled(HeroBox)`
  height: calc(var(--Header-height) + 33.333vh);
`;

// wrap='nowrap'
const ListItem = props => (
  <Link href={props.item.link}>
    <a>
      <ListItemRoot py={[2,3]}>
        <Flex align='baseline' wrap>
          <LargeText color='text' mr={3}>{props.item.headline}</LargeText>
          <Text color='text70'>{props.item.subheadline}</Text>
        </Flex>
      </ListItemRoot>
    </a>
  </Link>
);

const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear />

    <StyledHeroBox>
      <HeroContainer maxWidth="38em">
        <HeroFlex>
          <HGroup
            title="Forms and fact sheets."
            titleColor="brand"
            text="Readily available PDF downloads to help your Real Estate Management."
            largeTextColor="text70"
          />
        </HeroFlex>
      </HeroContainer>
    </StyledHeroBox>

    <Block maxWidth="38em" subhead="Forms" textLeft noTopPadding noBottomPadding>
      <div>{forms.map((item, i) => <ListItem item={item} key={i} />)}</div>
    </Block>

    <Block maxWidth="38em" subhead="Fact sheets" textLeft>
      <div>{factSheets.map((item, i) => <ListItem item={item} key={i} />)}</div>
    </Block>

    <Block
      border
      maxWidth="38em"
      subhead="Get in touch"
      title="No appointment necessary."
      titleColor="brandAlt"
    >
      <Contacts pathname={props.pathname} />
    </Block>

    <Footer />
  </Layout>
);

class FormsAndFactsPage extends React.Component {
  static async getInitialProps({ pathname, query }) {
    return {
      pathname,
      defaultForm: query.form,
    }
  }

  render() {
    return <Root {...this.props} />
  }
}

export default FormsAndFactsPage
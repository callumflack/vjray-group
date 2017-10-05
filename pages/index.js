import React from 'react'
import Link from 'next/link';

// import gql from "graphql-tag";
// import apollo from "../lib/apollo";
// import fetchMarkdown from "../lib/fetchMarkdown.js"

import styled from 'styled-components'
import { Flex, Box } from 'rebass'

import theme from '../components/theme-new'
import Layout from '../components/Shared/Layout'
import Container from '../components/Shared/Container2'
import { Display, Heading } from '../components/Shared/Headings'
import { Text, LargeText, MediumText, SmallText, AuthorText, TextBlock } from '../components/Shared/Texts'
import { Subheading } from '../components/Shared/Headings'
import LineBreak from '../components/Shared/LineBreak'
import HeroHome from '../components/Shared/HeroGroupHome'
import HeroStrata from '../components/Shared/HeroGroupStrata'
import ContactForms from '../components/Shared/ContactForms.js'
import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Block from '../components/Shared/Block'
import Contacts from '../components/Shared/Contacts'
import FeatureList from '../components/Shared/FeatureList'

import ContactAction from '../components/Shared/ContactAction'
import BlockCrown from '../components/Shared/BlockCrown'




const TextBlockWrapper = styled(Flex)`
  margin-top: 0;
  margin-bottom: ${theme.space[4]}px;

  @media (min-width: ${theme.breakpoints[0]}) {
    margin: 0;
  }
`

const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear linkToStrata />

    <HeroHome
      headline="The Real Estate team experienced in helping people."
      button
    />

    {/* <Block align="center">
      <Box mx="auto" width={[1, 1, 4 / 6]}>
        <Heading center>
          With our end-to-end services range,
          <LineBreak>we've got you covered.</LineBreak>
        </Heading>
        <LargeText center color="text70">
          "You guys are very quick to respond and handle things efficiently, no
          complaints here!"<LineBreak>
            <AuthorText>— Terry & Linda, Caringbah</AuthorText>
          </LineBreak>
        </LargeText>
      </Box>

      <FeatureList border />
    </Block> */}

    <BlockCrown
      crownWidth="42em"
      heading="With our end-to-end services range, we've got you covered."
      headingFamily="displayMedium"
      text="“You guys are very quick to respond and handle things efficiently, no
          complaints here!”<LineBreak><AuthorText>— Terry & Linda, Caringbah</AuthorText></LineBreak>"
    >
      <FeatureList border />
    </BlockCrown>

    <HeroStrata
      subhead="Dependable and effective"
      title="We believe in better <LineBreak>Strata Management </LineBreak><LineBreak>for Sydney.</LineBreak>"
      text="This paragraph is about how 50% of Sydney’s population will live in Strata management by 2020, about VJ Ray's history in Sydney, how they love Sydney. All pain points that hit customers and call their action."
    />

    {/* <Block bg="text7" maxWidth="48em">
      <Box w={[1, 1, 10 / 12]} mx="auto" mb={[64, 64]}>
        <Display
          center
          color='text'
          family="displayMedium"
          children="Our duty is your satisfaction."
        />
        <LargeText center color="brand">
          “I’ve been working for VJ Ray for over three decades and in that time,
          I’ve seen many things in Real Estate change. But at heart of great
          business is great customer service. That’s what we pride ourselves on
          here at VJ Ray”
          <LineBreak>
            <AuthorText>— Mike Pollard, Managing Director</AuthorText>
          </LineBreak>
        </LargeText>
      </Box>

      <Flex direction={["column", "column", "row"]} mx={[-2, -2, -2, -3]}>
        <Flex column width={[1, 1, 1 / 3]} px={[4, 2, null, 3]}>
          <Box mt="6px">
            <img src="static/img/mike-pollard.jpg" />
          </Box>
          <Text color="text70" mt={3} children="Mike Pollard" />
          <Text color="text70" children="Managing Director" />
          <Text color="text70" children="35 years with VJ Ray" />
        </Flex>
        <TextBlockWrapper
          order={["-1", "-1", "initial"]}
          px={[2, 2, 2, 3]}
          width={[1, 1, 2 / 3]}
        >
          <TextBlock>
            <p>
              Way back in 1962, in a one-room office in Campsie, VJ Ray started
              its journey in the Sydney real estate scene. Today, over 55 years
              later, our Strata Team has 27 staff, all with just one goal, to
              help people. VJ Ray is a family company that was started by Leon
              Pollard and is currently owned and operated by his son Mike
              Pollard. The guiding principal behind the VJ Ray culture has been
              to maintain the original family company atmosphere that is so
              often lost as companies grow into corporate giants. At VJ Ray we
              know that our job is much more that just looking after buildings,
              its about caring for and helping the people that own or live in
              those buildings. It's the people that matter. That's why our
              mission statement is so simple. We Help People.
            </p>
          </TextBlock>
        </TextBlockWrapper>
      </Flex>
    </Block> */}

    <BlockCrown
      bg="text7"
      maxWidth="48em"
      title="Our duty is your satisfaction."
      titleFamily="displayMedium"
      titleColor="text"
      largeTextColor="brand"
      text="“I’ve been working for VJ Ray for over three decades and in that time,
          I’ve seen many things in Real Estate change. But at heart of great
          business is great customer service. That’s what we pride ourselves on
          here at VJ Ray”<AuthorText>— Mike Pollard, Managing Director</AuthorText>"
    >
      <Flex
        direction={["column", "column", "row"]}
        mx={[-2, -2, -2, -3]}
        mt={4}
      >
        <Flex column width={[1, 1, 1 / 3]} px={[4, 2, null, 3]}>
          <Box mt="6px">
            <img src="static/img/mike-pollard.jpg" />
          </Box>
          <Text left color="text70" mt={3} children="Mike Pollard" />
          <Text left color="text70" children="Managing Director" />
          <Text left color="text70" children="35 years with VJ Ray" />
        </Flex>
        <TextBlockWrapper
          order={["-1", "-1", "initial"]}
          px={[2, 2, 2, 3]}
          width={[1, 1, 2 / 3]}
        >
          <TextBlock>
            <p>
              Way back in 1962, in a one-room office in Campsie, VJ Ray started
              its journey in the Sydney real estate scene. Today, over 55 years
              later, our Strata Team has 27 staff, all with just one goal, to
              help people. VJ Ray is a family company that was started by Leon
              Pollard and is currently owned and operated by his son Mike
              Pollard. The guiding principal behind the VJ Ray culture has been
              to maintain the original family company atmosphere that is so
              often lost as companies grow into corporate giants. At VJ Ray we
              know that our job is much more that just looking after buildings,
              its about caring for and helping the people that own or live in
              those buildings. It's the people that matter. That's why our
              mission statement is so simple. We Help People.
            </p>
          </TextBlock>
        </TextBlockWrapper>
      </Flex>
    </BlockCrown>

    {/* <Block textCenter maxWidth="48em" pb={[0, 0]}>
      <Subheading center children="Contact us" />
      <Display center color="brand" mb={1} children="How can we help you?" />
      <Text
        center
        color="text70"
        pt={3}
        children="For emergencies, call 1300 073 123 any time."
      />
      <ContactForms defaultForm={props.defaultForm} />
    </Block> */}

    <BlockCrown
      maxWidth="38em"
      noBottomPadding
      subhead="Contact us"
      title="How can we help?"
      titleColor="brandAlt"
    >
      <ContactForms defaultForm={props.defaultForm} />
    </BlockCrown>

    <BlockCrown
      subhead="Visit us"
      title="Primary CTA message"
      titleColor="brandAlt"
    >
      <Contacts />
    </BlockCrown>

    <Footer />
  </Layout>
);



class Index extends React.Component {
  static async getInitialProps({ pathname, query }) {
    return {
      pathname,
      defaultForm: query.form
    };
  }
  render() {
    return <Root {...this.props} />;
  }
}

export default Index;

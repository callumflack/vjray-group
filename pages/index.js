import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'
import { Flex, Box } from 'rebass'

// NEW
import Layout from '../components/Shared/Layout'
import Container from '../components/Shared/Container2'
import { Display, Heading } from '../components/Shared/Headings'
import { Text, LargeText, MediumText, SmallText, AuthorText, TextBlock } from '../components/Shared/Texts'
import { Subheading } from '../components/Shared/Headings'
import LineBreak from '../components/Shared/LineBreak'
import theme from '../components/theme-new'

import ContactAction from '../components/Shared/ContactAction'
import HeroHome from '../components/HeroHome'
import HeroStrata from '../components/HeroStrata'

// OLD
import hoc from '../components/Shared/hoc'
import Button from '../components/Shared/Button'
import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Block from '../components/Shared/Block'
import Contacts from '../components/Shared/Contacts'
import FeatureList from '../components/Shared/FeatureList'
import ContactForms from '../components/Shared/ContactForms.js'




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

    <Block align="center">
      <Box mx="auto" width={[1, 1, 4 / 6]}>
        <Heading center>
          With our end-to-end services range,{" "}
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
    </Block>

    <HeroStrata
      subhead="Dependable and effective"
      headline="We believe in better <LineBreak>Strata Management </LineBreak><LineBreak>for Sydney.</LineBreak>"
      lede="This paragraph is about how 50% of Sydney’s population will live in Strata management by 2020, about VJ Ray's history in Sydney, how they love Sydney and want to see it progress upwards and stave off housing uncertainty and more pain points that hit customers."
    />

    <Block bg="text7">
      <Container pb={4}>
        <Display center color="text" family="displayMedium">
          Our duty is your satisfaction.
        </Display>

        <Box w={[1, 1, 8 / 12]} mx="auto">
          <LargeText center color="brand">
            “I’ve been working for VJ Ray for over three decades and in that
            time, I’ve seen many things in Real Estate change. But at heart of
            great business is great customer service. That’s what we pride
            ourselves on here at VJ Ray”{" "}
            <LineBreak>
              <AuthorText>— Mike Pollard, Managing Director</AuthorText>
            </LineBreak>
          </LargeText>
        </Box>
      </Container>

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
    </Block>

    <Block textCenter maxWidth="672px" pb={[0, 0]}>
      <Subheading center color="brandAlt" children="Contact us" />
      <Display center color="brand" mb={1} children="How can we help you?" />
      <Text center color="text70" pt={3} children="For emergencies, call 1300 073 123 any time." />
      <ContactForms defaultForm={props.defaultForm} />
    </Block>

    <Block textCenter>
      <ContactAction headline="Primary message here" />
      <Contacts />
    </Block>

    <Footer />
  </Layout>
);

class Index extends React.Component {
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

export default Index;

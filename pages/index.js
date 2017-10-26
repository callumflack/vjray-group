import React from "react"
import styled from "styled-components"
import { Flex, Box } from "rebass"

import Layout from "../components/Shared/Layout"
import Header from "../components/Shared/Header"
import Footer from "../components/Shared/FooterGroup"
import Block from "../components/Shared/Block"
import HeroGroupHome from "../components/Shared/HeroGroupHome"
import HeroGroupHomeStrata from "../components/Shared/HeroGroupHomeStrata"
import FeatureList from "../components/Shared/FeatureList"
import Contacts from "../components/Shared/Contacts"
import ContactForms from "../components/Shared/ContactForms"
import { Text, AuthorText, TextBlock } from "../components/Shared/Texts"
import LineBreak from "../components/Shared/LineBreak"

import theme from "../components/theme-new"
import fetchMarkdown from "../lib/fetch-markdown"


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

    <HeroGroupHome />

    <Block
      maxWidth="80em"
      crownWidth="42em"
      title="We specialise in Real Estate Management services."
      titleFamily="displayMedium"
      titleColor="brand"
      text={
        <span>
          &quot;You guys are very quick to respond and handle things
          efficiently, no complaints here!&quot;&nbsp;
          <LineBreak>
            <AuthorText>— Terry &amp; Linda, Caringbah</AuthorText>
          </LineBreak>
        </span>
      }
    >
      <FeatureList />
    </Block>

    <HeroGroupHomeStrata
      subhead="Strata Management"
      title="We believe in better <LineBreak>Strata Management </LineBreak><LineBreak>for Sydney.</LineBreak>"
      text="It's said that by 2020, over 50% of Sydney's population will be living or working in a Strata property. That's why we believe Sydney needs a Strata Manager that focuses on the people as well as the property."
    />

    <Block
      bg="text7"
      maxWidth="48em"
      title="Our duty is your satisfaction."
      titleColor="text"
      textColor="brand"
      text={
        <span>
          “I’ve been working for VJ Ray for over three decades and in that time,
          I’ve seen many things in Real Estate change. But at the heart of great
          business is great customer service. That’s what we pride ourselves on
          here at VJ Ray”<AuthorText>
            — Mike Pollard, Managing Director
          </AuthorText>
        </span>
      }
    >
      <Flex
        direction={["column", "column", "row"]}
        mx={[-2, -2, -2, -3]}
        mt={5}
      >
        <Flex column width={[1, 1, 1 / 3]} px={[4, 2, null, 3]}>
          <Box mt="6px">
            <img src="static/img/mike-pollard.jpg" alt="Mike Pollard" />
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
          <TextBlock
            dangerouslySetInnerHTML={{ __html: props.mikesLetter.bodyHtml }}
          />
        </TextBlockWrapper>
      </Flex>
    </Block>

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
)

class Index extends React.Component {
  static async getInitialProps({ pathname, query }) {
    const mikesLetter = require('../content/mikes-letter.json')

    return {
      mikesLetter,
      pathname,
      defaultForm: query.form,
    }
  }
  render() {
    return <Root {...this.props} />
  }
}

export default Index

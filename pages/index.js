import React from 'react'
import Link from 'next/link';
import fetchMarkdown from "../lib/fetch-markdown.js";

import styled from 'styled-components'
import { Flex, Box } from 'rebass'

import theme from '../components/theme-new'
import Layout from '../components/Shared/Layout'
import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Block from '../components/Shared/Block'
import HeroGroupHome from '../components/Shared/HeroGroupHome'
import HeroGroupHomeStrata from '../components/Shared/HeroGroupHomeStrata'
import FeatureList from '../components/Shared/FeatureList'
import Contacts from '../components/Shared/Contacts'
import ContactForms from '../components/Shared/ContactForms.js'

import { Display, Heading } from "../components/Shared/Headings";
import { Text, AuthorText, TextBlock } from "../components/Shared/Texts";
import { Subheading } from "../components/Shared/Headings";
import LineBreak from "../components/Shared/LineBreak";


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
      crownWidth="42em"
      heading="With our end-to-end services range, we've got you covered."
      headingFamily="displayMedium"
      text={
        <span>
          "You guys are very quick to respond and handle things efficiently, no
          complaints here!"&nbsp;
          <LineBreak>
            <AuthorText>— Terry & Linda, Caringbah</AuthorText>
          </LineBreak>
        </span>
      }
    >
      <FeatureList />
    </Block>

    <HeroGroupHomeStrata
      subhead="Dependable and effective"
      title="We believe in better <LineBreak>Strata Management </LineBreak><LineBreak>for Sydney.</LineBreak>"
      text="This paragraph is about how 50% of Sydney’s population will live in Strata management by 2020, and about VJ Ray's history in and love for Sydney."
    />

    <Block
      bg="text7"
      maxWidth="48em"
      title="Our duty is your satisfaction."
      titleFamily="displayMedium"
      titleColor="text"
      largeTextColor="brand"
      text={
        <span>
          “I’ve been working for VJ Ray for over three decades and in that time,
          I’ve seen many things in Real Estate change. But at heart of great
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
          <TextBlock
            dangerouslySetInnerHTML={{ __html: props.mikesLetter.body.html }}
          />
        </TextBlockWrapper>
      </Flex>
    </Block>

    <Block
      subhead="Real estate rentals"
      title="Check our current listings"
      titleColor="brand"
    >
      <Text center>
        Mike, with no sales anymore, do you still have rentals listings? If so,
        this will be a picture link block. If not, I'll remove this block.
      </Text>
    </Block>

    <Block
      maxWidth="38em"
      noBottomPadding
      subhead="Contact us"
      title="How can we help?"
      titleColor="brandAlt"
    >
      <ContactForms defaultForm={props.defaultForm} />
    </Block>

    <Block
      maxWidth="38em"
      subhead="Visit us"
      title="No appointment necessary."
      titleColor="brandAlt"
    >
      <Contacts pathname={props.pathname} />
    </Block>

    <Footer />
  </Layout>
);



class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ req, pathname, query }) {
    const mikesLetter = await fetchMarkdown(req, 'mikes-letter');
    
    return {
      mikesLetter,
      pathname,
      defaultForm: query.form
    };
  }
  render() {
    return <Root {...this.props} />;
  }
}

export default Index;

import React from "react"
import Link from "next/link"
import styled from "styled-components"
import { Flex, Box, Relative } from "rebass"

import fetchMarkdown from "../lib/fetch-markdown"

import theme from "../components/theme-new"
import Layout from "../components/Shared/Layout"
import Header from "../components/Shared/Header"
import Footer from "../components/Shared/FooterGroup"
import Block from "../components/Shared/Block"
import HeroGroupHome from "../components/Shared/HeroGroupHome"
import HeroGroupHomeStrata from "../components/Shared/HeroGroupHomeStrata"
import FeatureList from "../components/Shared/FeatureList"
import Contacts from "../components/Shared/Contacts"
import ContactForms from "../components/Shared/ContactForms"
import { Text, AuthorText, PrimaryButtonText, TextBlock } from "../components/Shared/Texts"
import LineBreak from "../components/Shared/LineBreak"
import { Button } from "../components/Shared/Buttons"


const TextBlockWrapper = styled(Flex)`
  margin-top: 0;
  margin-bottom: ${theme.space[4]}px;

  @media (min-width: ${theme.breakpoints[0]}) {
    margin: 0;
  }
`;

const ListingsBoxWrapper = styled(Box)`
  position: relative;
  height: 450px;
`;

const ListingsBox = styled(Box)`
  align-items: center;
  background-image: url("/static/img/listings-alt-66.jpg");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 0;
  // border-radius: 999px;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  
  &:before {
    background-color: rgba(18, 150, 222, 0.25);
    background-color: rgba(121, 122, 154, 0.5);
    background-blend-mode: multiply;
    bottom: 0;
    // border-radius: 999px;
    content: " ";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;


const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear linkToStrata />

    <HeroGroupHome />

    <Block
      crownWidth="42em"
      heading="We specialise in Real Estate Management services."
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
      subhead="A focus on people"
      title="We believe in better <LineBreak>Strata Management </LineBreak><LineBreak>for Sydney.</LineBreak>"
      text="It's said that by 2020, over 50% of Sydney's population will be living or working in a Strata property. That's why we believe Sydney needs a Strata Manager that focuses on the people as well as the property."
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
      maxWidth="48em"
      noBottomPadding
      subhead="Real estate rentals"
      title="Check our current listings"
      titleColor="brandAlt"
    >
      <ListingsBoxWrapper mt={[2, 3, 4]}>
        <ListingsBox>
          <Relative>
            <Link href="https://www.realestate.com.au/agency/vj-ray-pty-ltd-campsie-VJSCAM">
              <a>
                <PrimaryButtonText center>
                  <Button bg="white" color="brandAlt" px={3} icon>
                    Real Estate rentals
                  </Button>
                </PrimaryButtonText>
              </a>
            </Link>
          </Relative>
        </ListingsBox>
      </ListingsBoxWrapper>
    </Block>

    <Block
      maxWidth="38em"
      subhead="Contact us"
      title="How can we help?"
      titleColor="brandAlt"
    >
      <ContactForms defaultForm={props.defaultForm} />
    </Block>

    <Block
      border
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

  static async getInitialProps({ pathname, query }) {
    const mikesLetter = await fetchMarkdown("mikes-letter");

    return {
      mikesLetter,
      pathname,
      defaultForm: query.form,
    };
  }
  render() {
    return <Root {...this.props} />;
  }
}

export default Index;

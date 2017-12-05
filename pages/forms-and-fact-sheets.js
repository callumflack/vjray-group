import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Box, Flex } from "rebass";

import Layout from "../components/Shared/Layout";
import Header from "../components/Shared/Header";
import HGroup from "../components/Shared/HGroup";
import Block from "../components/Shared/Block";
import { HeroBox, HeroContainer, HeroFlex } from "../components/Shared/Hero";
import Icon from "../components/Shared/Icon";
import icons from "../components/Shared/iconConstants";
import Contacts from "../components/Shared/Contacts";
import Footer from "../components/Shared/Footer";
import { LargeText, Text } from "../components/Shared/Texts";
import { forms, factSheets } from "../components/constants";
import theme from "../components/theme-new";

const ListItemRoot = styled(Box)`
  border-bottom: 1px solid ${theme.colors.text20};
`;

const StyledHeroBox = styled(HeroBox)`
  height: calc(${theme.blockHeights.navBar} + 27.5vh);
`;

// wrap='nowrap'
const ListItem = props => (
  <a
    href={props.item.link}
    target="_blank"
    onClick={(event) => {
      event.preventDefault();
      window.open(props.item.link);
    }}
  >
    <ListItemRoot py={[3, 4]}>
      <Flex align="baseline" wrap>
        <Icon color="text" size="18" icon={icons.file} />
        <LargeText color="text" mx={3}>
          {props.item.headline}
        </LargeText>
        <Text color="text70" mt={1}>
          {props.item.subheadline}
        </Text>
      </Flex>
    </ListItemRoot>
  </a>
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
            titleFamily="displayMedium"
            text="All our helpful PDFs in one place."
            textColor="text70"
          />
        </HeroFlex>
      </HeroContainer>
    </StyledHeroBox>

    <Block
      maxWidth="38em"
      subhead="Forms"
      textLeft
      noTopPadding
      noBottomPadding
    >
      <div>{forms.map((item, i) => <ListItem item={item} key={i} />)}</div>
    </Block>

    <Block maxWidth="38em" subhead="Fact sheets" textLeft>
      <div>{factSheets.map((item, i) => <ListItem item={item} key={i} />)}</div>
    </Block>

    <Footer />
  </Layout>
);

class FormsAndFactsPage extends React.Component {
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

export default FormsAndFactsPage;

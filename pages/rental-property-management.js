import React from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { Flex, Box } from 'rebass'
import theme from '../components/theme-new'

import Layout from "../components/Shared/Layout";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/FooterGroup";
import Block from "../components/Shared/Block";
import HeroBlock from "../components/Shared/HeroBlock";
import HGroup from "../components/Shared/HGroup";
import ContactForms from "../components/Shared/ContactForms";
import Contacts from '../components/Shared/Contacts'

import icons from "../components/Shared/iconConstants";
import { landlordIntro, landlordList } from "../components/constants";
import IconListItem from "../components/Shared/IconListItem";
import { AuthorText } from "../components/Shared/Texts";
import LineBreak from "../components/Shared/LineBreak";
import { PrimaryButtonText } from "../components/Shared/Texts";
import { Button } from "../components/Shared/Buttons";



const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear linkToStrata />

    <HeroBlock
      blueGradientBg
      img="https://res.cloudinary.com/pw-img-cdn/image/upload/v1507860456/wife_o6eith.png"
    >
      <HGroup
        subhead="Subheader"
        subheadColor="text"
        title="Rental Property Management headline."
        titleColor="brand"
        text="Lede."
        largeTextColor="text"
      />
    </HeroBlock>

    <Block
      crownWidth="42em"
      text={
        <span>
          "You guys are very quick to respond and handle things efficiently, no
          complaints here!"&nbsp;
          <LineBreak>
            <AuthorText>— Terry & Linda, Caringbah</AuthorText>
          </LineBreak>
        </span>
      }
      textIsLast
      noBottomPadding
    />

    <Block maxWidth="64em" noBottomPadding>
      <img src="static/img/landlords.jpg" alt="" />
    </Block>

    <Block
      id="appraisal-forms"
      maxWidth="38em"
      titleColor="brandAlt"
      title="Get an appraisal."
      text="We'll respond quick smart."
    >
      <ContactForms defaultForm={props.defaultForm} />
    </Block>

    <Block
      bg="text7"
      maxWidth="38em"
      subhead="Facts & forms"
      text="Need a form or a fact? Here's all our readily available PDF downloads to help make your real estate management easy."
    >
      <Link href="/emergency">
        <PrimaryButtonText center>
          <Button icon bg="brandAlt" children="See the list" />
        </PrimaryButtonText>
      </Link>
    </Block>

    <Block
      maxWidth="38em"
      subhead="Talk in person"
      titleColor="brandAlt"
      title="No appointment needed."
    >
      <Contacts width='27em' pathname={props.pathname} />
    </Block>

    <Footer />
  </Layout>
);

class ContactPage extends React.Component {
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

export default ContactPage
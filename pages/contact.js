import React from 'react'
import Link from 'next/link'

import { contactDetails } from '../components/constants'

import styled, { css } from 'styled-components'
import { Flex, Box } from 'rebass'
import theme from '../components/theme-new'

import Layout from '../components/Shared/Layout'
import Container from '../components/Shared/Container2'
import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Block from '../components/Shared/Block'
import HeroBlock from '../components/Shared/HeroBlock'
import HGroup from '../components/Shared/HGroup'
import Contacts from "../components/Shared/Contacts.js";
import ContactForms from "../components/Shared/ContactForms.js";

import { SmallText, PrimaryButtonText } from '../components/Shared/Texts'
import LineBreak from "../components/Shared/LineBreak";
import { Button } from '../components/Shared/Buttons'


const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear linkToStrata />

    <HeroBlock beigeGradientBg img="http://res.cloudinary.com/pw-img-cdn/image/upload/v1507852665/ashley_h9r9nh.png">
      <HGroup
        title="We'll help make your Real Estate Management easier."
        titleColor="brand"
        text="Visit, call or write to us."
        largeTextColor="text"
      />
    </HeroBlock>

    <Block
      maxWidth="38em"
      title="Visit us anytime."
      titleColor="brand"
      text="No appointment necessary."
      noBottomPadding
    >
      <Contacts pathname={props.pathname} />
      <SmallText center color="text70" mt={[3, 4]}>
        Looking for the Auburn office? They aren't affiliated with us.{" "}
        <LineBreak mx="auto">
          You can find them <Link href="http://vjrayauburn.com.au/">here.</Link>
        </LineBreak>
      </SmallText>
    </Block>

    <Block
      id="contact-forms"
      maxWidth="38em"
      title="Write to us."
      titleColor="brandAlt"
      text="We'll respond quick smart."
      noBottomPadding
    >
      <ContactForms defaultForm={props.defaultForm} />
    </Block>

    <Block
      title="Is it a Strata emergency?"
      titleColor="brand"
      text="Go to our after-hours Strata repairs."
    >
      <a href="https://vjraystrata.com.au/">
        <PrimaryButtonText center>
          <Button icon bg="brand" children="Emergencies" />
        </PrimaryButtonText>
      </a>
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
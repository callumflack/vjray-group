import React from 'react'
import Link from 'next/link'

import { contactDetails } from '../components/constants'

import styled, { css } from 'styled-components'
import { Flex, Box } from 'rebass'
import theme from '../components/theme-new'

import Layout from '../components/Shared/Layout'
import Container from '../components/Shared/Container2'
import CoverImage from '../components/Shared/CoverImage'
import { Display, Headline, Subheadline, MobileSubheadline, HeadlineMeta } from '../components/Shared/Headline'
import { Text, SmallText, MediumText, LargeText, PrimaryButtonText } from '../components/Shared/Texts'
import LineBreak from "../components/Shared/LineBreak";
import { Button } from '../components/Shared/Buttons'
import Contacts from '../components/Shared/Contacts'
import ContactForms from "../components/Shared/ContactForms.js";
import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Block from '../components/Shared/Block'
import HeroContact from '../components/Shared/HeroGroupContact'
import Block from "../components/Shared/Block";



const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear linkToStrata />
    <HeroContact />

    <Block
      maxWidth="38em"
      title="Visit us anytime."
      titleColor="brand"
      text="No appointment necessary."
      noBottomPadding>
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
      titleColor="brand"
      text="We'll respond quick smart."
      noBottomPadding>
      <ContactForms defaultForm={props.defaultForm} />
    </Block>

    <Block
      title="Is it a Strata emergency?"
      titleColor="brand"
      text="For all types of after-hours repairs.">
      <Link href="/emergency">
        <PrimaryButtonText center>
          <Button icon bg="brand" children="Emergencies" />
        </PrimaryButtonText>
      </Link>
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
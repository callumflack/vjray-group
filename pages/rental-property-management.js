import React from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { Flex, Box } from 'rebass'
import theme from '../components/theme-new'

import Layout from '../components/Shared/Layout'
import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Block from "../components/Shared/Block";
import HeroLandlords from '../components/Shared/HeroGroupLandlords'
import ContactForms from "../components/Shared/ContactForms";
import Contacts from '../components/Shared/Contacts'

import icons from "../components/Shared/iconConstants";
import { landlordIntro, landlordList } from "../components/constants";
import IconListItem from "../components/Shared/IconListItem";
import { PrimaryButtonText } from "../components/Shared/Texts";
import { Button } from "../components/Shared/Buttons";



const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear linkToStrata />
    <HeroLandlords />

    <Block 
      maxWidth="48em" 
      textLeft 
      noBottomPadding 
      text={landlordIntro} />

    <Block maxWidth="48em" noBottomPadding>
      {landlordList.map((item, i) => <IconListItem item={item} key={i} />)}
    </Block>

    <Block
      id="appraisal-forms"
      maxWidth="38em"
      titleColor="brand"
      title="Get an appraisal."
      text="We'll respond quick smart.">
      <ContactForms defaultForm={props.defaultForm} />
    </Block>

    <Block
      bg="text7"
      maxWidth="38em"
      subhead="useful info"
      titleColor="brand"
      title="Useful info headline."
      text="Forms and info reason.">
      <Link href="/emergency">
        <PrimaryButtonText center>
          <Button icon bg="brandAlt" children="Find forms and info" />
        </PrimaryButtonText>
      </Link>
    </Block>

    <Block
      maxWidth="38em"
      subhead="get in touch"
      titleColor="brand"
      title="Primary CTA message.">
      <Contacts width={1/2} pathname={props.pathname} />
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
import React from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { Flex, Box } from 'rebass'
import theme from '../components/theme-new'

import Layout from '../components/Shared/Layout'
import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import BlockCrown from "../components/Shared/BlockCrown";
import HeroStrataManagement from '../components/Shared/HeroGroupStrataManagement'
import ContactForms from "../components/Shared/ContactForms";
import Contacts from '../components/Shared/Contacts'

import icons from "../components/Shared/iconConstants";
import { strataIntro, strataList } from "../components/constants";
import IconListItem from "../components/Shared/IconListItem";
import { PrimaryButtonText } from "../components/Shared/Texts";
import { Button } from "../components/Shared/Buttons";



const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear linkToStrata />
    <HeroStrataManagement />

    <BlockCrown 
      maxWidth="48em" 
      textLeft 
      noBottomPadding 
      text={strataIntro} />

    <BlockCrown maxWidth="48em">
      {strataList.map((item, i) => <IconListItem item={item} key={i} />)}
    </BlockCrown>

    <BlockCrown
      bg="text7"
      maxWidth="38em"
      subhead="Make strata easy"
      titleColor="brand"
      title="Visit our Strata site."
      text="Reason to click thru.">
      <Link href="/emergency">
        <PrimaryButtonText center>
          <Button icon bg="brandAlt" children="Visit VJ Ray Strata" />
        </PrimaryButtonText>
      </Link>
    </BlockCrown>

    <BlockCrown
      maxWidth="38em"
      subhead="get in touch"
      titleColor="brand"
      title="Primary CTA message.">
      <Contacts pathname={props.pathname} />
    </BlockCrown>

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
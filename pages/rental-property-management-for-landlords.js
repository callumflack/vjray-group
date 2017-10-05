import React from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { Flex, Box } from 'rebass'
import theme from '../components/theme-new'

import CoverImage from '../components/Shared/CoverImage'
import { Display, Heading, Subheading } from '../components/Shared/Headings'
import { Text, SmallText, MediumText, LargeText, PrimaryButtonText } from '../components/Shared/Texts'
import LineBreak from "../components/Shared/LineBreak";
import { Button } from '../components/Shared/Buttons'
import IconListItem from "../components/Shared/IconListItem";

import Layout from '../components/Shared/Layout'
import Container from '../components/Shared/Container2'
import { FormHeader } from "../components/Shared/Form";
import FormContact from "../components/Shared/FormContact";
import Header from '../components/Shared/Header'
import Contacts from '../components/Shared/Contacts'
import Footer from '../components/Shared/Footer'
import Block from '../components/Shared/Block'
import HeroLandlords from '../components/Shared/HeroGroupLandlords'
import ContactAction from '../components/Shared/ContactAction'

import icons from "../components/Shared/iconConstants";
import { landlordIntro, landlordList } from "../components/constants";



const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear linkToStrata />
    <HeroLandlords />

    <Block maxWidth="48em" noBottomPadding>
      <Heading
        font="displayMedium"
        color="text"
        mt={[0, 4, 4, 3]}
        mb={2}
        children="Possible secondary headline here."
      />
      <LargeText color="text70" w={[1, 2 / 3, 1]} children={landlordIntro} />
    </Block>

    <Block maxWidth="48em" noBottomPadding>
      {landlordList.map((item, i) => <IconListItem item={item} key={i} />)}
    </Block>

    <Block id="contact-forms" maxWidth="38em" textCenter>
      <Display color="brand" mb={1} children="Get an appraisal." />
      <LargeText color="text70">We'll respond quick smart.</LargeText>
      <Box mt={[3, 3, 3, 4]}>
        <FormHeader bg="brand" color="white" children="Appraisal form" />
        <FormContact />
      </Box>
    </Block>

    <Block bg="text7" maxWidth="38em" textCenter>
      <Subheading center border color="text" children="Useful info" />
      <Display color="brandAlt" mb={2} children="Useful info headline." />
      <LargeText color="text70" mb={4} children="Forms and info reason." />
      <Link href="/emergency">
        <PrimaryButtonText>
          <Button icon bg="brandAlt" children="Find forms and info" />
        </PrimaryButtonText>
      </Link>
    </Block>

    <Block textCenter>
      <ContactAction headlineColor="brand" headline="Primary CTA message" />
      <Contacts pathname={props.pathname} />
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
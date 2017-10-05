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
import { Text, SmallText, MediumText, LargeText } from '../components/Shared/Texts'
import LineBreak from "../components/Shared/LineBreak";
import { Button } from '../components/Shared/Buttons'
import Contacts from '../components/Shared/Contacts'
import ContactForms from "../components/Shared/ContactForms.js";
import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Block from '../components/Shared/Block'
import HeroContact from '../components/Shared/HeroContact'
import ContactAction from '../components/Shared/ContactAction'



const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear color="brandAlt" />
    <HeroContact />

    <Block textCenter pb={[0, 0]}>
      <Display color="brand" mb={1} children="Visit us anytime." />
      <LargeText color="text70" children="No appointment necessary." />
      <Box mt={0}>
        <Contacts />
        <SmallText color="text70" mt={[3, 4]}>
          Looking for the Auburn office? They aren't affiliated with us.{" "}
          <LineBreak mx="auto">
            You can find them{" "}
            <Link href="http://vjrayauburn.com.au/">here.</Link>
          </LineBreak>
        </SmallText>
      </Box>
    </Block>

    <Block id="contact-forms" maxWidth="48em" pb={[0, 0]}>
      <Container textCenter>
        <Display color="brand" mb={1} children="Write to us." />
        <LargeText color="text70">We'll respond quick smart.</LargeText>
      </Container>

      <Box mt={[3, 3, 3, 4]}>
        <ContactForms defaultForm={props.defaultForm} />
      </Box>
    </Block>

    <Block textCenter>
      <Display color="brand" mb={1} children="Is it a Strata emergency?" />
      <LargeText color="text70" mb={3} children="For all types of after-hours repairs." />
      <Link href="/emergency">
        <MediumText>
          <Button icon bg="brand" children="Emergencies" />
        </MediumText>
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
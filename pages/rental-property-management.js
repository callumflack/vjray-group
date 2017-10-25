import React from "react"
import Link from "next/link"
import styled, { css } from "styled-components"
import { Box, Flex, Relative, Absolute } from "rebass"
import Layout from "../components/Shared/Layout"
import Header from "../components/Shared/Header"
import Footer from "../components/Shared/FooterGroup"
import Block from "../components/Shared/Block"
import HeroBlock from "../components/Shared/HeroBlock"
import HGroup from "../components/Shared/HGroup"

import TestimonialSlide from "../components/Shared/TestimonialSlide"
import Container from "../components/Shared/Container2"
import IconListItem from "../components/Shared/IconListItem"
import { FormHeader } from "../components/Shared/Form"
import FormContact from "../components/Shared/FormContact"
import Contacts from "../components/Shared/Contacts"

import { Subheading } from "../components/Shared/Headings"
import { Text, LargeText, AuthorText, PrimaryButtonText } from "../components/Shared/Texts"
import { Button } from "../components/Shared/Buttons"

import { 
  landlordIntro, 
  landlordList,
  tenantIntro, 
  tenantList,
} from "../components/constants"


const StyledFlex = styled(Flex)`
  height: 100%;
`

const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear />

    <HeroBlock
      bluegreyGradientBg
      img="http://res.cloudinary.com/pw-img-cdn/image/upload/v1508729005/hero-pm-2_fi7p8b.png"
    >
      <HGroup
        title="Property Management sorted with a smile."
        titleColor="brand"
        titleFamily="displayMedium"
        titleIs="h1"
        text="Whether you're a landlord or a tenant, our service puts you first."
        textColor="text70"
      />
    </HeroBlock>

    <Block maxWidth="62em">
      <TestimonialSlide
        src="static/img/landlord.jpg"
        subheading="For landlords"
        text={
          <span>
            “I’ve found their Property Management unit to be fantastic! Thanks
            VJ Ray” <AuthorText>— Jessica, Campsie</AuthorText>
          </span>
        }
      />
      <Container maxWidth="40em" mt={[3, 4, 5]}>
        <LargeText color="text70" pt={1} mb={[3, 4, 5]} children={landlordIntro} />
        {landlordList.map((item, i) => (
          <IconListItem smallSpace item={item} key={i} />
        ))}
        <FormHeader
          bg="brand"
          color="white"
          mt={[3, 4, 5]}
          children="Get a landlord appraisal"
        />
        <FormContact border defaultForm={props.defaultForm} />
      </Container>
    </Block>

    <Block maxWidth="62em" bg="brandAlt7">
      <TestimonialSlide
        src="static/img/tenants.jpg"
        textRight
        subheading="For tenants"
        text={
          <span>
            “I’ve found their Property Management unit to be fantastic! Thanks
            VJ Ray” <AuthorText>— Jessica, Campsie</AuthorText>
          </span>
        }
      />
      <Container maxWidth="40em" mt={[3, 4, 5]}>
        <LargeText color="text70" pt={1} mb={[3, 4, 5]} children={tenantIntro} />
        {tenantList.map((item, i) => (
          <IconListItem smallSpace item={item} key={i} />
        ))}
      </Container>
    </Block>

    <Block
      maxWidth="40em"
      heading="Looking for a specific form?"
      headingColor="brand"
      headingFamily="displayMedium"
      text="Here's all our PDF downloads to help make your Real Estate Management easy."
      textColor="text70"
    >
      <Link href="/forms-and-fact-sheets">
        <PrimaryButtonText center>
          <Button icon bg="brand" children="See the list" />
        </PrimaryButtonText>
      </Link>
    </Block>

    <Footer />
  </Layout>
)

class ContactPage extends React.Component {
  static async getInitialProps({ pathname, query }) {
    return {
      pathname,
      defaultForm: query.form,
    }
  }

  render() {
    return <Root {...this.props} />
  }
}

export default ContactPage

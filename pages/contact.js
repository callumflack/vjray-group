import React from "react"
import Link from "next/link"

import Layout from "../components/Shared/Layout"
import Header from "../components/Shared/Header"
import Footer from "../components/Shared/FooterGroup"
import Block from "../components/Shared/Block"
import HeroBlock from "../components/Shared/HeroBlock"
import HGroup from "../components/Shared/HGroup"
import Contacts from "../components/Shared/Contacts"
import ContactForms from "../components/Shared/ContactForms"

import { SmallText, PrimaryButtonText } from "../components/Shared/Texts"
import LineBreak from "../components/Shared/LineBreak"
import { Button } from "../components/Shared/Buttons"

const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear linkToStrata />

    <HeroBlock
      bluegreyGradientBg
      img="https://res.cloudinary.com/pw-img-cdn/image/upload/v1507860456/wife_o6eith.png"
    >
      <HGroup
        title="We're ready to help make your Real Estate Management easy."
        titleColor="text"
        titleFamily="displayMedium"
        text="Visit, call or write to us 24/7."
        textColor="text70"
      />
    </HeroBlock>

    <Block
      maxWidth="38em"
      title="Visit us anytime."
      titleColor="brand"
      text="No appointment needed."
      noBottomPadding
    >
      <Contacts pathname={props.pathname} />
      <SmallText center color="text70" mt={[3, 4]}>
        Looking for the Auburn office? They aren&apos;t affiliated with us.
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
      noBottomPadding
    >
      <ContactForms defaultForm={props.defaultForm} />
    </Block>

    <Block
      id="emergencies"
      title="Is it a Strata emergency?"
      titleColor="brand"
      text="Go to our after-hours Strata repairs."
    >
      <a href="https://vjraystrata.com.au/emergency">
        <PrimaryButtonText center>
          <Button icon bg="brand" children="Emergencies" />
        </PrimaryButtonText>
      </a>
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

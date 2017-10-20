import React from "react";
import Link from "next/link";

import Layout from "../components/Shared/Layout";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/FooterGroup";
import Block from "../components/Shared/Block";
import HeroBlock from "../components/Shared/HeroBlock";
import HGroup from "../components/Shared/HGroup";
import { FormHeader } from "../components/Shared/Form";
import FormContact from "../components/Shared/FormContact";
import Contacts from "../components/Shared/Contacts";
import { PrimaryButtonText } from "../components/Shared/Texts";
import { Button } from "../components/Shared/Buttons";

const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear color="brandAlt" />

    <HeroBlock
      blueGradientBg
      img="https://res.cloudinary.com/pw-img-cdn/image/upload/v1507860456/wife_o6eith.png"
    >
      <HGroup
        subhead="Experienced & Dependable"
        subheadColor="text"
        title="We'll sort it without fuss & with a smile."
        titleColor="brandAlt"
        titleIs="h1"
        text="This is a lead-in line to help people scroll down to the content."
        largeTextColor="text70"
      />
    </HeroBlock>

    <Block maxWidth="62em" noBottomPadding>
      <img src="/static/img/landlords-04.png" alt="" />
    </Block>

    <Block id="appraisal-forms" maxWidth="38em" noTopPadding>
      <FormHeader
        bg="brand"
        color="white"
        mt={4}
        children="Get a landlord appraisal"
      />
      <FormContact border defaultForm={props.defaultForm} />
    </Block>

    <Block maxWidth="62em" bg="brandAlt7">
      <img src="/static/img/tenants-01.png" alt="" />
    </Block>

    <Block
      maxWidth="38em"
      subhead="Facts & forms"
      text={
        <span>
          <em>Need a form or a fact?</em> Here's all our readily available PDF
          downloads to help make your real estate management easy.
        </span>
      }
    >
      <Link href="/forms-and-fact-sheets">
        <PrimaryButtonText center>
          <Button icon bg="brandAlt" children="See the list" />
        </PrimaryButtonText>
      </Link>
    </Block>

    <Block
      maxWidth="38em"
      border
      subhead="Talk in person"
      titleColor="brandAlt"
      title="Visit our Campsie office."
    >
      <Contacts width="21em" pathname={props.pathname} />
    </Block>

    <Footer />
  </Layout>
);

class ContactPage extends React.Component {
  static async getInitialProps({ pathname, query }) {
    return {
      pathname,
      defaultForm: query.form
    };
  }

  render() {
    return <Root {...this.props} />;
  }
}

export default ContactPage;

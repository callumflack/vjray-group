import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Block from "../components/Block";
import HeroBlock from "../components/HeroBlock";
import HGroup from "../components/HGroup";
import TestimonialSlide from "../components/TestimonialSlide";
import Container from "../components/Container2";
import ListItem from "../components/ListItem";
import { FormHeader } from "../components/Form";
import FormLandlord from "../components/FormLandlord";
import {
  LargeText,
  AuthorText,
  PrimaryButtonText,
} from "../components/Texts";
import LineBreak from "../components/LineBreak";
import { Button } from "../components/Buttons";
import {
  landlordIntro,
  landlordList,
  tenantIntro,
  tenantList,
} from "../components/constants";

const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear />

    <HeroBlock
      bluegreyGradientBg
      img="https://res.cloudinary.com/pw-img-cdn/image/upload/v1512091929/smiler-hero_yau1qn.png"
    >
      <HGroup
        title="Property Management sorted with a smile."
        titleColor="brand"
        titleFamily="displayMedium"
        titleIs="h1"
        text="Whether you're a landlord or a tenant, we put you first."
        textColor="text70"
      />
    </HeroBlock>

    <Block maxWidth="62em">
      <TestimonialSlide
        src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1512438121/landlord_nzfpsl.jpg"
        subheading="For landlords"
        text={
          <span>
            “I&apos;ve found the Property Management unit to be absolutely
            fantastic! Thanks VJ Ray”
            <LineBreak>
              <AuthorText>— Silvano, Campsie</AuthorText>
            </LineBreak>
          </span>
        }
      />
      <Container maxWidth="40em" mt={[3, 4, 5]} px={[0, 2]}>
        <LargeText color="text70" pt={1} mb={[3, 4, 5]}>
          {landlordIntro}
        </LargeText>
        {landlordList.map((item, i) => (
          <ListItem smallSpace item={item} key={i} />
        ))}
        <FormHeader bg="brand" color="white" mt={[3, 4, 5]}>
          Get a landlord appraisal
        </FormHeader>
        <FormLandlord brandColor defaultForm={props.defaultForm} />
      </Container>
    </Block>

    <Block maxWidth="62em" bg="brandAlt7">
      <TestimonialSlide
        src="https://res.cloudinary.com/pw-img-cdn/image/upload/v1512438134/tenants_kttfzu.jpg"
        textRight
        subheading="For tenants"
        text={
          <span>
            “They respond immediately
            <LineBreak>
              and organise what is needed straight away”&nbsp;
            </LineBreak>
            <AuthorText>— Daniel &amp; Ruth, Carringbah</AuthorText>
          </span>
        }
      />
      <Container maxWidth="40em" mt={[3, 4, 5]} px={[0, 2]}>
        <LargeText color="text70" pt={1} mb={[3, 4, 5]}>
          {tenantIntro}
        </LargeText>
        {tenantList.map((item, i) => (
          <ListItem smallSpace item={item} key={i} />
        ))}
      </Container>
    </Block>

    <Block
      maxWidth="40em"
      heading="Looking for a form?"
      headingColor="brand"
      headingFamily="displayMedium"
      textColor="text70"
      text={
        <span>
          Here&apos;s all our PDF downloads to help make
          <LineBreak break={["inline", "inline", "block"]}>
            your Real Estate Management easy.
          </LineBreak>
        </span>
      }
    >
      <Link href="/forms-and-fact-sheets" prefetch passHref>
        <a>
          <PrimaryButtonText center>
            <Button icon bg="brand">
              See the list
            </Button>
          </PrimaryButtonText>
        </a>
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
    };
  }

  render() {
    return <Root {...this.props} />;
  }
}

export default ContactPage;

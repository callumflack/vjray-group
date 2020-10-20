import React from "react";
import Link from "next/link";
import { Box } from "rebass";
import Layout from "../components/Shared/Layout";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";
import HeroBlock from "../components/Shared/HeroBlock";
import BlockWrapper from "../components/Shared/BlockWrapper";
import HGroup from "../components/Shared/HGroup";
import { strataList } from "../components/constants";
import ListItem from "../components/Shared/ListItem";
import { LargeText, PrimaryButtonText } from "../components/Shared/Texts";
import { Button, ButtonOutline } from "../components/Shared/Buttons";
import LineBreak from "../components/Shared/LineBreak";

const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear linkToStrata />

    <HeroBlock
      bg="beige"
      img="https://res.cloudinary.com/pw-img-cdn/image/upload/v1507788260/hero-home-171012_epyqlz.jpg"
    >
      <HGroup
        title={
          <span>
            Skip the hassle <LineBreak>of Strata Management.</LineBreak>
          </span>
        }
        titleColor="brand"
        titleFamily="displayMedium"
        titleIs="h1"
        text="At VJ Ray Strata, we understand how valuable your peace of mind is."
        textColor="text70"
      >
        <PrimaryButtonText>
          <Link href="https://vjraystrata.com.au">
            <a>
              <ButtonOutline icon color="brand" brandBg px={3}>
                Strata site
              </ButtonOutline>
            </a>
          </Link>
        </PrimaryButtonText>
      </HGroup>
    </HeroBlock>

    <BlockWrapper maxWidth="44em" textLeft>
      <HGroup
        heading="It all adds up to a better deal."
        headingFamily="displayMedium"
        textIsLast
        textLeft
        text="We do everything you’d expect: arrange meetings, collect levies, manage repairs and help with disputes. And we believe it shouldn’t stop there. Here’s how we go further for your peace of mind:"
      >
        <Box my={5}>
          {strataList.map((item, i) => (
            <ListItem smallSpace item={item} key={i} />
          ))}
        </Box>
        <LargeText color="text70">
          If you&apos;d like a Strata Manager that focuses on you as well as
          your property, visit our Strata website:
        </LargeText>
        <Link href="https://vjraystrata.com.au/" passHref>
          <a>
            <PrimaryButtonText center mt={5}>
              <Button icon bg="brand" children="Our Strata site" />
            </PrimaryButtonText>
          </a>
        </Link>
      </HGroup>
    </BlockWrapper>

    <Footer />
  </Layout>
);

class StrataPage extends React.Component {
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

export default StrataPage;

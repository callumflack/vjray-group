import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Box, Flex } from "rebass";
import Container from "./Container2";
import FooterItem from "./FooterItem";
import { Divider } from "./Texts";
import { site } from "../constants";
import theme from "../theme-new";

// prettier-ignore
const Root = styled(Box) `
  border-top: 1px solid ${theme.colors.text20};
`;

// prettier-ignore
const StyledFlex = styled(Flex) `
  @media (max-width: 1023px) {
    nav + nav {
      margin-top: 2rem;
    }
  }
`;

// prettier-ignore
const Nav = styled(Flex) `
  color: ${theme.colors.text40};

  @media (max-width: 767px) {
    :not(:first-child) {
      margin-top: 2rem;
    }
  }

  p,
  em,
  a {
    color: ${theme.colors.text70};

    @media (max-width: 512px) {
      font-size: ${theme.fontSizes[0]}pt;
    }
  }

  em {
    font-family: ${theme.families.textRegular};
    font-style: normal;
  }
`;

// prettier-ignore
const Column = styled(Box) `
  @media (max-width: 767px) {
    :not(:first-child) {
      margin-top: 2rem;
    }
  }

  @media (min-width: 768px) {
    :not(:last-child) {
      margin-right: 2.5rem;
    }
  }

  a {
    display: block;

    &:not(:first-child) {
      margin-top: 0.25rem;
    }

    ${props => props.tapspace && css`
      @media (max-width: 767px) {
        &:not(:first-child) {
          margin-top: 0.5rem;
        }
      }
    `};
  }
`;

/*
 * -------------
 * Secondary nav
 * -------------
 */

const RuledBox = styled(Box)`
  border-top: 1px solid ${theme.colors.text20};
  padding-top: ${theme.space[3]}px;
`;

const SecondNav = styled(Flex)`
  color: ${theme.colors.text40};

  @media (max-width: 512px) {
    :last-child {
      margin-top: ${theme.space[3]}px;
    }
  }

  p,
  span,
  a {
    @media (max-width: 512px) {
      font-size: ${theme.fontSizes[1]}px;
    }
  }
`;

const Footer = props => (
  <Root is="footer" bg={props.bg}>
    <Container maxWidth="72em" py={5}>
      <StyledFlex direction={["column", "column", "column", "row"]} justify="space-between">
        <Nav is="nav">
          <Flex direction={["column", "row"]}>
            <Column>
              <FooterItem
                link="https://www.google.com.au/maps/place/V+J+Ray/@-33.9113278,151.1011612,17z"
                bold
                label="Campsie Head Office"
              />
              <FooterItem
                link="https://www.google.com.au/maps/place/V+J+Ray/@-33.9113278,151.1011612,17z"
                label="8 Anglo Road"
              />
              <FooterItem
                link="https://www.google.com.au/maps/place/V+J+Ray/@-33.9113278,151.1011612,17z"
                label="Campsie, NSW 2194"
              />
              <FooterItem link="tel:02 9784 7900" label="T: 02 9784 7900" />
              <FooterItem link="mailto:campsie@vjray.com.au" label="E: campsie@vjray.com.au" />
            </Column>
            <Column>
              <FooterItem
                link="https://www.google.com.au/maps/place/V.J.+Ray/@-34.0432583,151.1198929,17z"
                bold
                label="Caringbah Office"
              />
              <FooterItem
                link="https://www.google.com.au/maps/place/V.J.+Ray/@-34.0432583,151.1198929,17z"
                label="18 President Avenue"
              />
              <FooterItem
                link="https://www.google.com.au/maps/place/V.J.+Ray/@-34.0432583,151.1198929,17z"
                label="Caringbah, NSW 2229"
              />
              <FooterItem link="tel:02 9541 3300" label="T: 02 9541 3300" />
              <FooterItem link="mailto:caringbah@vjray.com.au" label="E: caringbah@vjray.com.au" />
            </Column>
          </Flex>
        </Nav>
        <Nav is="nav">
          {site === "strata" ? (
            <Flex direction={["column", "row"]} order={[-1, 2]}>
              <Column tapspace="true">
                <FooterItem link="/who-we-are" label="About Us" bold />
                <FooterItem link="/" label="Home page" />
                <FooterItem link="/who-we-are" label="Who we are" />
                <FooterItem link="/what-we-do-for-you" label="What we do for you" />
              </Column>
              <Column tapspace="true">
                <FooterItem link="/useful-info" label="Useful Info" bold />
                <FooterItem link="/useful-info" label="Strata guides" />
                <FooterItem link="/useful-info#blog" label="Strata blog" />
                <FooterItem link="/useful-info/forms-and-fact-sheets" label="Forms and facts" />
              </Column>
              <Column tapspace="true">
                <FooterItem link="/contact" label="Contact Us" bold />
                <FooterItem link="/let-us-help-you" label="Get a fast quote" />
                <FooterItem link="/contact?form=report#contact-forms" label="Report an issue" />
                <FooterItem link="/emergency" label="Emergencies" />
              </Column>
            </Flex>
          ) : (
            <Flex direction={["column", "row"]} order={[-1, 2]}>
              <Column tapspace="true">
                <FooterItem link="/" bold label="Services" />
                <FooterItem link="/strata-management" label="Strata Management" />
                <FooterItem link="/rental-property-management" label="Property Management" />
                <FooterItem link="/property-valuations" label="Valuations" />
              </Column>
              <Column tapspace="true">
                <FooterItem link="/forms-and-fact-sheets" bold label="Useful Info" />
                <FooterItem link="/forms-and-fact-sheets" label="Facts and forms" />
              </Column>
              <Column tapspace="true">
                <FooterItem link="/contact" bold label="Contact us" />
                <FooterItem link="/contact?form=report#contact-forms" label="Report a repair" />
                <FooterItem link="/contact#emergencies" label="Strata emergencies" />
              </Column>
            </Flex>
          )}
        </Nav>
      </StyledFlex>

      <RuledBox mt={[32, 64]}>
        <Flex direction={["column", "row"]} justify="space-between">
          <SecondNav is="nav">
            <span>© 2019 VJ Ray</span>
            <Divider />
            <FooterItem link="/terms-of-use" label="Terms" />
            <Divider />
            <FooterItem link="/privacy-policy" label="Privacy" />
          </SecondNav>
          <SecondNav is="nav">
            <FooterItem link="https://callumflack.design/" label="Site by Callum Flack Design" />
            {site === "strata" && (
              <div>
                <Divider />
                <FooterItem link="https://admin.vjraystrata.com.au/keystone/signin" label="Login" />
              </div>
            )}
          </SecondNav>
        </Flex>
      </RuledBox>
    </Container>
  </Root>
);

Footer.propsTypes = {
  bg: PropTypes.string,
};

Footer.defaultProps = {
  bg: "",
};

export default Footer;

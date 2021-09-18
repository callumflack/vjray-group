import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled, { css } from "styled-components";
import { Box, Flex } from "rebass";

import { site } from "../constants";
import theme from "../theme-new";
import { headerFade } from "./animationConstants";
import { Display } from "./Headings";
import { ButtonOutline } from "./Buttons";

const StyledBox = styled(Box)`
  a {
    margin: 0.5rem 0;
  }
`;

// prettier-ignore
const StyledFlex = styled(Flex)`
  opacity: 0;
  transform: translateY(-32px);

  ${props => props.isVisible && css`
    opacity: 1;
    transform: translateY(0);
    transition: 
      opacity ${headerFade.duration}s ease-in-out,
      transform ${headerFade.duration}s ease-in-out;
  `};
`;

const StyledModal = styled(Flex)`
  opacity: 1;
  transform: translateY(0);
  transition: opacity ${headerFade.duration}s ease-in-out,
    transform 0s ease-in-out 0s;
  background-color: ${theme.colors.offWhite};
  bottom: 0;
  left: 0;
  padding: ${theme.space[3]}px;
  position: fixed;
  right: 0;
  top: ${theme.blockHeights.navBar};
  z-index: 15;

  ${props =>
    !props.isVisible &&
    css`
      opacity: 0;
      transform: translateY(100vh);
      transition: opacity ${headerFade.duration}s ease-in-out,
        transform 0s ease-in-out ${headerFade.duration}s;
    `};
`;

const LinkText = props => (
  <Display color="text" family="displayMedium" isActive={props.isActive}>
    {props.children}
  </Display>
);

const HeaderMobileNav = props => (
  <StyledModal
    onClick={props.handleModalClick}
    isVisible={props.isVisible}
    column
  >
    <StyledBox>
      <StyledFlex is="nav" column isVisible={props.isVisible}>
        {props.navItems.map(item => (
          <Link href={item.href}>
            <a>
              <LinkText>{item.label}</LinkText>
            </a>
          </Link>
        ))}

        {site === "strata" && (
          <Link href="/let-us-help-you">
            <a>
              <Display mt={1}>
                <ButtonOutline icon color="brand" children="Get a fast quote" />
              </Display>
            </a>
          </Link>
        )}
      </StyledFlex>
    </StyledBox>
  </StyledModal>
);

HeaderMobileNav.propTypes = {
  navItems: PropTypes.array,
  isVisible: PropTypes.bool.isRequired,
  handleModalClick: PropTypes.func.isRequired,
};

HeaderMobileNav.defaultProps = {
  navItems: [],
};

export default HeaderMobileNav;

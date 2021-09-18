import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled, { css } from "styled-components";
import { Absolute, Flex } from "rebass";
import theme from "../theme-new";
import { Text } from "./Texts";
import { displayBreakPoint } from "./utils";

const Wrapper = styled(Absolute)`
  ${displayBreakPoint};
`;

const StyledFlex = styled(Flex)`
  a {
    cursor: pointer;
    line-height: ${theme.blockHeights.navBar};
  }

  a:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

// prettier-ignore
const LinkTextRoot = styled(Text) `
  ${props => props.isActive && css`
    border-bottom: 2px solid currentColor;
    padding-bottom: 33px;
  `}
`;

const LinkText = props => (
  <LinkTextRoot
    is="span"
    family="textRegular"
    color="inherit"
    isActive={props.isActive}
    children={props.children}
  />
);

const HeaderDesktopNav = props => (
  <Wrapper break={["none", "none", "none", "block"]} top right bottom left>
    <StyledFlex is="nav" justify="center">
      {props.navItems.filter(item => item.label !== "Home").map(item => (
        <Link href={item.href}>
          <a>
            <LinkText isActive={props.pathname === item.href}>
              {item.label}
            </LinkText>
          </a>
        </Link>
      ))}
    </StyledFlex>
  </Wrapper>
);

HeaderDesktopNav.propTypes = {
  navItems: PropTypes.array,
  pathname: PropTypes.string,
};

HeaderDesktopNav.defaultProps = {
  navItems: [],
  pathname: "",
};

export default HeaderDesktopNav;

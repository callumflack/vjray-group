import React from "react";
import styled, { css } from "styled-components";
import Rebass from "rebass";
import { weight, family, lineHeight, letterSpacing } from "./utils";
import theme from "../theme-new";

//
// Heading
//

const Root = styled(Rebass.Heading) `
  ${weight} 
  ${family} 
  ${lineHeight} 
  ${letterSpacing}
`;

const Heading = props => (
  <Root
    fontSize={[4, 4, 5, 6]}
    family="displayMedium"
    weight={4}
    lh="headline"
    mb={[1, 2, 3]}
    {...props}
  />
);

//
// Display
//
// Method:
// 1. Import custom type prop variables and assign base component styles if req'd.
// 2. Then wrap this root component with any base responsive styles, and apply base Rebass props.

// 1.
const DisplayRoot = styled(Root) `
  ${props => props.reverseShadow && css`text-shadow: 0 0 15px rgba(0, 0, 0, 0.4);`}
`;

// 2.
const Display = props => (
  <DisplayRoot
    color="brand"
    fontSize={[5, 5, 6, 7]}
    family="displayRegular"
    weight={4}
    lh="display"
    mt={[0, 1]}
    mb={[1, 2, 2, 3]}
    {...props}
  />
);

//
// Meta Headlines
//

const MetaHeading = props => (
  <Root
    center
    caps
    family="textRegular"
    fontSize={[0, 0, 1]}
    ls="meta"
    lh="display"
    is="h3"
    {...props}
  />
);

const SubheadingRoot = styled(MetaHeading) `
  border-bottom: 1px solid currentColor;
  display: inline-block;
`;

const Subheading = props => (
  <SubheadingRoot
    mb={3}
    mx="auto"
    pb={2}
    {...props}
  />
);

const HeadingDetail = props => (
  <MetaHeading
    align="initial"
    caps
    color="text"
    font="textLight"
    is="h5"
    {...props}
  />
);

const BoxedSubheading = styled(MetaHeading) `
  --Header-height: 48px;
  align-items: center;
  display: flex;
  font-family: ${theme.families.textRegular};
  height: var(--Header-height);
  justify-content: center;

  ${props => props.bg && css`
      background-color: ${theme.colors[props.bg] || theme.colors.brand};
  `} 
  
  ${props => props.inactive && css`
    background-color: ${theme.colors.grey};
    color: ${theme.colors.text70};
  `};
`;

export {
  Display,
  Heading,
  Subheading,
  MetaHeading,
  HeadingDetail,
  BoxedSubheading,
};

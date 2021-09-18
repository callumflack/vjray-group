import React from "react";
import styled, { css } from "styled-components";
import { Box, Flex } from "rebass";
import Container from "./Container2";
import theme from "./theme-new";

/*
 * HeroFrame is an alternative to HeroBox.
 * it works without need for HeroContainer, HeroFlex or HeroTitleBox.
 */

const HeroFrame = styled(Box)`
  height: auto;
  padding-top: ${theme.blockHeights.navBar};
  position: relative;
`;

/*
 * HeroBox, HeroContainer, and HeroFlex or HeroTitleBox work together.
 */

// prettier-ignore
const HeroBox = styled(Box) `
  align-items: center;
  height: calc(${theme.blockHeights.navBar} + 50vh);
  padding-top: ${theme.blockHeights.navBar};
  position: relative;

  @media (min-width: 512px) and (max-height: 800px) {
    min-height: calc(${theme.blockHeights.navBar} + 70vh) !important;
  }

  ${props => props.beigeGradientBg && css`
    background-image: linear-gradient(
      to bottom,
      rgba(222, 202, 178, 0.555),
      rgb(247, 242, 236) 70%
    );
  `}

  ${props => props.blueGradientBg && css`
    background-image: linear-gradient(
      to bottom,
      rgba(18, 150, 222, 0.25),
      rgba(18, 150, 222, 0.075) 70%
    );
  `}

  ${props => props.bluegreyGradientBg && css`
    background-image: linear-gradient(
      to bottom,
      rgba(188, 230, 255, 0.5),
      rgb(247, 242, 236) 100%
    );
  `}

  ${props => props.showAfterScreen && css`
    @media (max-width: 1024px) {
      &:after {
        bottom: 0;
        content: " ";
        left: 0;
        position: absolute;
        top: 0;
        right: 0;
      }
  `}
`;

const HeroContainer = styled(Container)`
  height: 100%;
  position: relative;
`;

const HeroFlex = styled(Flex)`
  align-items: center;
  height: inherit;
  position: relative;
  z-index: 1;
`;

// prettier-ignore
const HeroTitleBoxRoot = styled(Box) `
  ${props => props.invertTextOnMobile && css`
    @media (max-width: 512px) {
      h4 { color: ${theme.colors.text7}; }
      h1 { color: white; }
      p { color: ${theme.colors.text20}; }
    }
  `}
`;

const HeroTitleBox = props => <HeroTitleBoxRoot ml={[0, 0, 4, 0]} {...props} />;

export { HeroBox, HeroFrame, HeroContainer, HeroFlex, HeroTitleBox };

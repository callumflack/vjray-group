import styled, { css } from 'styled-components'
import { Box, Flex } from 'rebass';
import theme from '../theme.js';
import Container from './Container'


// @media (min-width: 768px) {
//   height: calc(var(--Hero-height-tablet) + var(--Header-height)) !important;
// }
//
// @media (min-width: 1024px) {
//   height: calc(var(--Hero-height-laptop) + var(--Header-height)) !important;
// }
//
// @media (min-width: 1536px) {
//   height: calc(var(--Hero-height) + var(--Header-height)) !important;
// }

const HeroBox = styled(Box)`
  --Header-height: ${theme.blockHeights.navBar};
  --Hero-height: 50vh;
  --Hero-height-mobile: 50vh;
  --Hero-height-tablet: 40vh;
  --Hero-height-laptop: 66vh;

  align-items: center;
  height: calc(var(--Hero-height-mobile) + var(--Header-height));
  padding-top: var(--Header-height);
  position: relative;

  @media (min-width: 512px) and (max-height: 800px) {
    min-height: calc(var(--Header-height) + 70vh) !important;
  }

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
`//`

/*
 * HeroFrame is an alternative to HeroBox.
 * it works without need for HeroContainer, HeroFlex or HeroTitleBox.
 */

const HeroFrame = styled(Box)`
  --Header-height: ${theme.blockHeights.navBar};
  height: auto;
  padding-top: var(--Header-height);
  position: relative;
`

const HeroContainer = styled(Container)`
  height: 100%;
  position: relative;
`

const HeroFlex = styled(Flex)`
  align-items: center;
  height: inherit;
  position: relative;
  z-index: 1;
`

const HeroTitleBoxRoot = styled(Box)`
  ${props => props.invertTextOnMobile && css`
    @media (max-width: 512px) {
      h4 { color: ${theme.colors.text7}; }
      h1 { color: white; }
      p { color: ${theme.colors.text20}; }
    }
  `}
`//`

const HeroTitleBox = props =>
  <HeroTitleBoxRoot ml={[ 0, 0, 4, 0 ]} {...props} />

export {
  HeroBox,
  HeroFrame,
  HeroContainer,
  HeroFlex,
  HeroTitleBox
}

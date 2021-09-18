import styled, { css } from "styled-components";
import { Flex } from "rebass";
import theme from "../theme-new";
import { headerFade } from "./animationConstants";

// prettier-ignore
const HeaderRoot = styled(({
  isHidden,
  isWindowScrolled,
  isModalVisible,
  children,
  ...rest
}) => (
  <Flex {...rest}>{children}</Flex>
)) `
  background-color: rbga(255, 255, 255, 1);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(88, 88, 112, 0.15);
  height: ${theme.blockHeights.navBar};
  opacity: 1;
  position: fixed;
  top: 0;
  transform: translate3d(0, 0, 0) translateY(0px);
  transition:
    opacity ${headerFade.duration}s ease-in-out ${headerFade.delay}s,
    transform ${headerFade.duration}s ease-in-out ${headerFade.delay}s,
    background-color ${headerFade.duration}s ease-in-out,
    border ${headerFade.duration}s ease-in-out 0s;
  width: 100%;
  z-index: 3;

  @media (max-width: 512px) {
    button {
      padding: 0 0.75rem;
    }
  }

  @media (max-width: 320px) {
    button span {
      display: none;
    }
  }

  ${props => props.color && css`
    color: ${theme.colors[props.color] || theme.colors.text};
  `}

  ${props => props.clear && css`
    background-color: rbga(255, 255, 255, 0);
  `}

  ${props => props.reverseBorder && css`
    border-color: rgba(255, 255, 255, 0.15);
  `}

  ${props => props.isHidden && css`
    opacity: 0;
    transform: translate3d(0, 0, 0) translateY(-${theme.blockHeights.navBar});
    transition:
      opacity ${headerFade.duration}s ease-in-out 1s,
      transform ${headerFade.duration}s ease-in-out 1s,
      background-color ${headerFade.duration}s ease-in-out,
      border ${headerFade.duration}s ease-in-out 0s;
  `}

  ${props => props.isWindowScrolled && css`
    background-color: ${theme.colors[props.bg] || "rgba(255, 255, 255, 1)"};
    border-color: transparent;
    box-shadow:
      0 16px 24px 2px rgba(0,0,0,0.03),
      0 6px 30px 5px rgba(0,0,0,0.03);
    color: ${theme.colors.text};
    transition:
      opacity ${headerFade.duration}s ease-in-out,
      transform ${headerFade.duration}s ease-in-out,
      background-color ${headerFade.duration}s ease-in-out,
      border ${headerFade.duration}s ease-in-out;
  `}

  ${props => props.isModalVisible && css`
    background-color: ${theme.colors.offWhite};
    border-bottom: 1px solid rgba(88, 88, 112, 0.15);
    transition:
      opacity ${headerFade.duration}s ease-in-out,
      transform ${headerFade.duration}s ease-in-out,
      background-color ${headerFade.duration}s ease-in-out,
      border ${headerFade.duration}s ease-in-out;
  `}

  ${props => props.invertTextOnMobile && css`
    @media (max-width: 512px) {
      a,
      span {
        color: ${theme.colors.text20} !important;
      }

      button {
        border-color: rgba(255, 255, 255, 0.15);
      }
    }
  `}
`;

export default HeaderRoot;

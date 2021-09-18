import styled, { css } from "styled-components";
import { Container as _Container } from "rebass";

// prettier-ignore
const Container = styled(_Container) `
  padding-left: 24px !important;
  padding-right: 24px !important;
  position: relative;
  
  ${props => props.textCenter && css`
    text-align: center;
  `}
  
  ${props => props.textLeft && css`
    text-align: left;
  `}

  ${props => props.mobileBleed && css`
    @media (max-width: 768px) {
      padding-left: 0;
      padding-right: 0;
    }
  `}
`;

export default Container;

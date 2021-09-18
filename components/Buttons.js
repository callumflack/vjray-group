import styled, { css } from "styled-components";
import {
  Button as _Button,
  ButtonOutline as _ButtonOutline,
  ButtonCircle as _ButtonCircle,
} from "rebass";
import { letterSpacing, actionIcon } from "./utils";
import theme from "../theme-new";

// Buttons inherit font sizes and weights from
// wrapped text components.
//
// Two font-size rules in specific order:
// 1. resets the rebass button font-size.
// 2. sets it to inherit from the Text wrapper.
//
// If you need to change line-height, use s-c per instance.

const BaseStyles = `
  border-radius: 3px;
  font-size: initial !important;
  font-size: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important;
  padding: 8px 22px 7px 24px !important;
  text-transform: inherit;
`;

// prettier-ignore
const brandBg = `
  :hover, 
  :active { 
    background-color: ${theme.colors.brand} !important;
  }

  :active {
    box-shadow: 
      inset 0 0 0 2px ${theme.colors.brand}, 
      inset 0 0 8px rgba(0,0,0,0.25) !important;
  }
`;

const textBg = `
  :hover, 
  :active { 
    background-color: ${theme.colors.text} !important;
  }

  :active {
    box-shadow: 
      inset 0 0 0 2px ${theme.colors.text}, 
      inset 0 0 8px rgba(0,0,0,0.25) !important;
  }
`;

// application
// prettier-ignore
const Button = styled(_Button)`
  ${BaseStyles} 
  ${letterSpacing} 
  ${props => props.icon && css`${actionIcon};`};
`;

// prettier-ignore
const ButtonOutline = styled(_ButtonOutline)`
  ${BaseStyles} 
  ${letterSpacing} 
  ${props => props.icon && css`${actionIcon};`} 
  ${props => props.brandBg && css`${brandBg};`} 
  ${props => props.textBg && css`${textBg};`};
`;

// prettier-ignore
const ButtonCircle = styled(_ButtonCircle)`
  ${BaseStyles} 
  ${letterSpacing} 
  ${props => props.icon && css`${actionIcon};`};
`;

// spreadable text styling props.
// FAIL
// these can be overriden per button instance
// via the 4 base utility styles:
// family, weight, lh & ls
// const Primary = {
//   fontSize: [0, 0, 1],
//   family: "textMedium",
//   lineHeight: "button"
// };

export { Button, ButtonOutline, ButtonCircle };

import styled, { css } from "styled-components";
import { Button as foo } from "rebass";
import theme from "../theme";

// Using the SuitCSS button
// https://github.com/suitcss/components-button/blob/master/lib/button.css
// --Button-letter-spacing: 0.025em;
// letter-spacing: var(--Button-letter-spacing);
// --Button-height: calc(54px - calc( 2 * var(--Button-border-width)) );

const Button = styled(foo) `
  font-family: inherit;
  font-size: inherit;
  letter-spacing: inherit;
  line-height: inherit;

  &:-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  &:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }

  &:disabled,
  &.is-disabled {
    --Button-background-color: ${theme.colors.text70};
    cursor: default;
    opacity: var(--Button-disabled-opacity);
  }

  ${props => props.clean && css`
    --Button-background-color: transparent;
    --Button-border-color: transparent;
  `}

  ${props => props.primary && css`
    --Button-background-color: ${theme.colors[props.bgColor] || theme.colors.brand};
    --Button-border-color: ${theme.colors[props.bgColor] || theme.colors.brand};
    --Button-color: white;
  `};

  ${props => props.large && css`
    --Button-border-color: ${theme.colors[props.bgColor] || theme.colors.brand};
    --Button-height: 46px;
    padding-left: 2rem;
    padding-right: 1.8rem;
  `}

  ${props => props.invert && css`
    border-color: currentColor;
    border-radius: calc( 0.5 * var(--Button-height));
    border-radius: calc( 0.5 * 54px);
    border-radius: 5px;
  `}

  ${props => props.invertLegible && css`
    background-color: rgba(255,255,255,0.4);

    @media (min-width: 768px) {
      background-color: transparent;
    }
  `}

  ${props => props.icon && css`
    :after {
      content: '►';
      font-size: 55%;
      margin-left: 8px;
      position: relative;
      top: -1px;
    }
  `}
`;

export default Button;

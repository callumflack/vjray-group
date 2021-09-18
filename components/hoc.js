const styled = require("styled-components").default;
const css = require("styled-components").css;
const { fontSize } = require("styled-system");
const { width, space, color } = require("styled-system");
const theme = require("../theme-new").default;

// stolen from: https://github.com/jxnblk/styled-system/blob/master/docs/styled-components/hoc.js

// prettier-ignore
module.exports = (Component, props) => {
  const SystemComponent = styled(Component)`
    ${fontSize}
    ${width}
    ${space}
    ${color}

    ${props => props.align && css`
      text-align: ${[props.align]};
    `}

    ${props => props.font && css`
      font-family: ${theme.families[props.font] || theme.families.textLight};
    `}

    ${props => props.inlineBlock && css`
      display: inline-block;
    `}

    ${props => props.letterSpacing && css`
      letter-spacing: ${theme.letterSpacings[props.letterSpacing] || theme.letterSpacings.text};
    `}

    ${props => props.lineHeight && css`
      line-height: ${theme.lineHeights[props.lineHeight] || theme.lineHeights.text};
    `}

    ${props => props.uppercase && css`
      text-transform: uppercase;
    `}
  `;

  return SystemComponent;
};

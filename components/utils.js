import {
  style,
  responsiveStyle,
  pseudoStyle,
} from "styled-system";

// https://github.com/jxnblk/styled-system#style
// https://github.com/jxnblk/rebass/pull/275

// import theme from './theme-new'
// Example style object w/ imported theme:
// const RuledStyles = {
//   width: '${theme.space[4]}px'
// }

const weight = style({
  prop: "weight",
  cssProperty: "fontWeight",
  key: "weights",
});

const family = style({
  prop: "family",
  cssProperty: "fontFamily",
  key: "families",
});

const letterSpacing = style({
  prop: "ls",
  cssProperty: "letterSpacing",
  key: "letterSpacings",
});

const lineHeight = style({
  prop: "lh",
  cssProperty: "lineHeight",
  key: "lineHeights",
});

const displayBreakPoint = responsiveStyle({
  prop: "break",
  cssProperty: "display",
});

// https://github.com/jxnblk/styled-system#pseudostyle
const buttonHover = pseudoStyle("button", "buttonHover")({
  color: "colors",
  backgroundColor: "colors",
});

// These are just object literals,
// no rebass here:
const actionIcon = `
  :after {
    content: '►';
    font-size: 55%;
    margin-left: 6px;
    position: relative;
    top: -1px;
  }
`;

export {
  weight,
  family,
  lineHeight,
  letterSpacing,
  displayBreakPoint,
  buttonHover,
  actionIcon,
};

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Box } from "rebass";

// https://codepen.io/sdras/pen/a3596da23d8f9463079ac57c8e3ee9f8?editors=1010
// https://github.com/zeit/next.js/tree/master/examples/svg-components
// https://medium.com/@david.gilbertson/icons-as-react-components-de3e33cb8792
// THIS?: https://github.com/jxnblk/reline

const Icon = props => (
  <IconRoot color={props.color}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox="0 0 90 90"
    >
      <rect fill="none" width="90px" height="90px" />
      <path d={props.icon} />
    </svg>
  </IconRoot>
);

const IconRoot = styled(Box)`
  display: inline-block;
  line-height: 1;
  position: relative;
  text-align: center;

  > svg {
    fill: currentColor;
    vertical-align: baseline;
  }
`;

Icon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
};

Icon.defaultProps = {
  color: " ",
  size: " ",
  icon: " ",
};

export default Icon;

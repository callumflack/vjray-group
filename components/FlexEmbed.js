import React from "react";
import styled, { css } from "styled-components";
import { Box } from "rebass";

const Root = styled(Box)`
  overflow: hidden;
  position: relative;
`;

// prettier-ignore
const Ratio = styled(Box)`
  --ratio: 1;
  padding-bottom: calc(100% * var(--ratio));
  width: 100%;

  ${props => props.ratio && css`
    --ratio: ${props.ratio};
  `}
`;

const Content = styled(Box)`
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

// default export (props) => (
const FlexEmbed = props => (
  <Root>
    <Ratio ratio={props.ratio}>
      <Content>{props.children}</Content>
    </Ratio>
  </Root>
);

export default FlexEmbed;

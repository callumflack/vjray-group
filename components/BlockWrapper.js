import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Box } from "rebass";
import Container from "./Container2";
import theme from "../theme-new";

// prettier-ignore
const Root = styled(Box) `
  ${props => props.border && css`
      border-top: 1px solid ${theme.colors.text10};
  `}
  
  ${props => props.noTopPadding && css`
    padding-top: 0 !important;
  `}
  
  ${props => props.noBottomPadding && css`
    padding-bottom: 0 !important;
  `}
`;

// pt={props.pt || [ 4, 4, 5, 5 ]}

const BlockWrapper = props => (
  <Root
    is="section"
    id={props.id}
    bg={props.bg}
    border={props.border}
    noTopPadding={props.noTopPadding}
    noBottomPadding={props.noBottomPadding}
    pt={props.pt || [64, 64, 128, 128]}
    pb={props.pb || [64, 64, 128, 128]}
    style={props.style}
  >
    <Container
      maxWidth={props.maxWidth}
      textCenter={props.textCenter}
      textLeft={props.textLeft}
      mobileBleed={props.mobileBleed}
    >
      {props.children}
    </Container>
  </Root>
);

BlockWrapper.propTypes = {
  id: PropTypes.string,
  bg: PropTypes.string,
  border: PropTypes.bool,
  noTopPadding: PropTypes.bool,
  noBottomPadding: PropTypes.bool,
  pt: PropTypes.array,
  pb: PropTypes.array,
  style: PropTypes.any,
  maxWidth: PropTypes.string,
  textCenter: PropTypes.bool,
  textLeft: PropTypes.bool,
  mobileBleed: PropTypes.bool,
  children: PropTypes.element,
};

BlockWrapper.defaultProps = {
  id: null,
  bg: null,
  border: false,
  noTopPadding: false,
  noBottomPadding: false,
  style: null,
  maxWidth: "72em",
  textCenter: true,
  textLeft: false,
  mobileBleed: false,
  children: null,
};

export default BlockWrapper;

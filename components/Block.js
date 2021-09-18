import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Box } from "rebass";
import BlockWrapper from "./BlockWrapper";
import HGroup from "./HGroup";

const StyledBox = styled(Box)`
  text-align: left;

  ${props =>
    props.childBoxTextCenter &&
    css`
      text-align: center;
    `}
`;

const Block = props => (
  <BlockWrapper
    id={props.id}
    bg={props.bg}
    textLeft={props.textLeft}
    textCenter={props.textCenter}
    maxWidth={props.maxWidth}
    border={props.border}
    noTopPadding={props.noTopPadding}
    noBottomPadding={props.noBottomPadding}
  >
    <HGroup
      crownWidth={props.crownWidth}
      textCenter={props.textCenter}
      subhead={props.subhead}
      subheadColor={props.subheadColor}
      heading={props.heading}
      headingFamily={props.headingFamily}
      headingColor={props.headingColor}
      title={props.title}
      titleIs={props.titleIs}
      titleFamily={props.titleFamily}
      titleColor={props.titleColor}
      text={props.text}
      textColor={props.textColor}
      textFamily={props.textFamily}
      textIsLast={props.textIsLast}
    />
    {props.children && <StyledBox>{props.children}</StyledBox>}
  </BlockWrapper>
);

Block.propTypes = {
  id: PropTypes.string,
  bg: PropTypes.string,
  border: PropTypes.bool,
  noTopPadding: PropTypes.bool,
  noBottomPadding: PropTypes.bool,
  textCenter: PropTypes.bool,
  textLeft: PropTypes.bool,
  maxWidth: PropTypes.string,
  crownWidth: PropTypes.string,
  childBoxTextCenter: PropTypes.bool,
  subhead: PropTypes.string,
  subheadColor: PropTypes.string,
  heading: PropTypes.string,
  headingColor: PropTypes.string,
  headingFamily: PropTypes.string,
  title: PropTypes.string,
  titleIs: PropTypes.string,
  titleColor: PropTypes.string,
  titleFamily: PropTypes.string,
  text: PropTypes.object,
  textIsLast: PropTypes.bool,
  textColor: PropTypes.string,
  textFamily: PropTypes.string,
  children: PropTypes.element || PropTypes.array
};

Block.defaultProps = {
  id: "",
  bg: "",
  border: false,
  textCenter: true,
  textLeft: false,
  noTopPadding: false,
  noBottomPadding: false,
  maxWidth: "80em",
  crownWidth: "48em",
  childBoxTextCenter: false,
  subheadColor: "text",
  headingColor: "text",
  titleColor: "text",
  titleFamily: "displayMedium",
  textColor: "text70",
  textFamily: "textLight",
  textIsLast: false
};

export default Block;

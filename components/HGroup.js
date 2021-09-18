import React from "react";
import PropTypes from "prop-types";
import { Box } from "rebass";
import Container from "./Container2";
import { LargeText } from "./Texts";
import { Display, Heading, Subheading } from "./Headings";

const HGroup = props => (
  <Box maxWidth={props.crownWidth} w={1} mx="auto" px={0}>
    {props.subhead && <Subheading color={props.subheadColor}>{props.subhead}</Subheading>}
    {props.heading && (
      <Heading color={props.headingColor} family={props.headingFamily}>
        {props.heading}
      </Heading>
    )}
    {props.title && (
      <Display is={props.titleIs} color={props.titleColor} family={props.titleFamily}>
        {props.title}
      </Display>
    )}
    {props.text && (
      <LargeText color={props.textColor} family={props.textFamily} mb={props.textIsLast ? 0 : 4}>
        {props.text}
      </LargeText>
    )}
    {props.children}
  </Box>
);

HGroup.propTypes = {
  crownWidth: PropTypes.string,
  subhead: PropTypes.string,
  subheadColor: PropTypes.string,
  heading: PropTypes.string,
  headingColor: PropTypes.string,
  headingFamily: PropTypes.string,
  titleIs: PropTypes.string,
  title: PropTypes.object,
  titleColor: PropTypes.string,
  titleFamily: PropTypes.string,
  text: PropTypes.string,
  textFamily: PropTypes.string,
  textIsLast: PropTypes.bool,
  textColor: PropTypes.string,
  children: PropTypes.node
};

HGroup.defaultProps = {
  crownWidth: "44em",
  textCenter: false,
  subhead: "",
  subheadColor: "text",
  heading: "",
  headingFamily: "displayMedium",
  headingColor: "text",
  title: "",
  titleIs: "h2",
  titleFamily: "displayMedium",
  titleColor: "text",
  text: "",
  textColor: "text70",
  textFamily: "textBook",
  textIsLast: false,
  children: null
};

export default HGroup;

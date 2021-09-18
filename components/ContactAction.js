import React from "react";
import PropTypes from "prop-types";
import { Box } from "rebass";
import { Display, Subheading } from "./Headings";

const ContactAction = props => (
  <Box align="center">
    <Subheading center border color="text" children="contact us" />
    <Display
      color={props.headlineColor || "text"}
      family={props.family}
      children={props.headline}
    />
  </Box>
);

ContactAction.propTypes = {
  headlineColor: PropTypes.string,
  headline: PropTypes.string,
  family: PropTypes.string,
};

ContactAction.defaultProps = {
  headline: "",
  headlineColor: "text",
  family: "displayRegular",
};

export default ContactAction;

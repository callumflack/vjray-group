import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Box, Flex, Absolute } from "rebass";
import FlexEmbed from "./FlexEmbed";
import { Subheading } from "./Headings";
import { LargeText } from "./Texts";
import RespToggle from "./ResponsiveToggle";

const StyledFlex = styled(Flex)`
  height: 100%;
`;

// prettier-ignore
const StyledBox = styled(Box) `
  ${props => props.textRight && css`text-align: right;`}
`;

const StyledAbsolute = styled(Absolute)`
  display: none;

  @media (min-width: 32em) {
    display: block;
  }
`;

const TestimonialSlide = props => (
  <div>
    <FlexEmbed ratio="9/16">
      <img src={props.src} alt="" />
      <StyledAbsolute top bottom right left>
        <StyledFlex align="flex-end" justify={props.textRight && "flex-end"}>
          <StyledBox w={[1, 1, 1 / 2]} p={[3, 4]} textRight={props.textRight}>
            <Subheading color="white">{props.subheading}</Subheading>
            <LargeText color="white" right={props.textRight}>
              {props.text}
            </LargeText>
          </StyledBox>
        </StyledFlex>
      </StyledAbsolute>
    </FlexEmbed>

    <RespToggle break={["block", "none"]}>
      <StyledBox w={[1, 1, 1 / 2]} p={[3, 4]} textRight={props.textRight} bg="brand">
        <Subheading color="white" w="1/2">
          {props.subheading}
        </Subheading>
        <LargeText color="white" right={props.textRight}>
          {props.text}
        </LargeText>
      </StyledBox>
    </RespToggle>
  </div>
);

TestimonialSlide.propTypes = {
  src: PropTypes.string.isRequired,
  textRight: PropTypes.bool,
  subheading: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired
};

TestimonialSlide.defaultProps = {
  textRight: false
};

export default TestimonialSlide;

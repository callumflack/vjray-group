import React from "react";
import PropTypes from "prop-types";
import HeroImage from "./HeroImage";
import { HeroBox, HeroContainer, HeroFlex, HeroTitleBox } from "./Hero";

const HeroBlock = props => (
  <HeroBox
    is="header"
    beigeGradientBg={props.beigeGradientBg}
    blueGradientBg={props.blueGradientBg}
    bluegreyGradientBg={props.bluegreyGradientBg}
    bg={props.bg}
  >
    <HeroImage img={props.img} />
    <HeroContainer maxWidth={props.maxWidth}>
      <HeroFlex>
        <HeroTitleBox
          width={[13 / 24, 5 / 12]}
          ml={[0, 3, 4, 5] || props.ml}
          mb={[3, 4]}
        >
          {props.children}
        </HeroTitleBox>
      </HeroFlex>
    </HeroContainer>
  </HeroBox>
);

HeroBlock.propTypes = {
  beigeGradientBg: PropTypes.bool,
  blueGradientBg: PropTypes.bool,
  bluegreyGradientBg: PropTypes.bool,
  bg: PropTypes.string,
  img: PropTypes.string,
  maxWidth: PropTypes.string,
  ml: PropTypes.object,
};

HeroBlock.defaultProps = {
  blueGradientBg: false,
  beigeGradientBg: false,
  bluegreyGradientBg: false,
  maxWidth: "72em",
};

export default HeroBlock;

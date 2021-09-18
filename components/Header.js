import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Flex, Box } from "rebass";

import HeaderRoot from "./HeaderRoot";
import Icon from "./Icon";
import { IconPhone } from "./Icons";
import { Text } from "./Texts";
import Container from "./Container2";
import Hamburger from "./Hamburger";
import MobileNav from "./HeaderMobileNav";
import DesktopNav from "./HeaderDesktopNav";
import { displayBreakPoint } from "./utils";
import { ButtonOutline } from "./Buttons";

import { site, navItems, contactDetails } from "../constants";
import theme from "../theme-new";
import icons from "./iconConstants";
import { headerFade } from "./animationConstants";

const StyledFlex = styled(Flex)`
  height: ${theme.blockHeights.navBar};
  position: relative;
`;

const StyledButton = styled(ButtonOutline)`
  box-shadow: inset 0 0 0 1px !important;
`;

const CTABlock = styled(Box)`
  ${displayBreakPoint} justify-content: center;
  position: relative;
`;

const CTALink = props => (
  <Link href={props.href}>
    <a>
      <Text family="textRegular">
        <StyledButton textBg color="text">
          {props.children}
        </StyledButton>
      </Text>
    </a>
  </Link>
);

const Root = props => (
  <div>
    <HeaderRoot
      isHidden={!props.isVisible}
      isWindowScrolled={props.isWindowScrolled}
      isModalVisible={props.isModalVisible}
    >
      <Container px={[1, 2, 2, 3]} maxWidth="72em" w={1}>
        <StyledFlex align="center" justify="space-between">
          {/* MENU */}
          <DesktopNav navItems={navItems} pathname={props.pathname} />

          {/* LOGO, CTA & HAMBURGER */}
          <Box>
            <Link href="/">
              <a>
                <Icon
                  color={props.color}
                  size="80"
                  icon={site === "strata" ? icons.logo : icons.logoGroup}
                />
              </a>
            </Link>
          </Box>

          <CTABlock>
            <CTALink href={`tel:${contactDetails.phone}`}>
              <IconPhone navBar />
              {contactDetails.phone}
            </CTALink>
          </CTABlock>

          <CTABlock break={[null, null, null, "none"]} p={2}>
            <Hamburger
              onClick={props.handleModalTriggerClick}
              isOpen={props.isModalVisible}
            >
              <span />
              <span />
              <span />
              <span />
            </Hamburger>
          </CTABlock>
        </StyledFlex>
      </Container>
    </HeaderRoot>

    <MobileNav
      navItems={navItems}
      handleModalClick={props.handleModalClick}
      isVisible={props.isModalVisible}
    />
  </div>
);

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handleModalTriggerClick = this.handleModalTriggerClick.bind(this);

    this.state = {
      isVisible: true,
      isWindowScrolled: false,
      previousScrollPos: 0,
      isModalVisible: false,
    };
  }

  componentDidMount() {
    this.setState({
      previousScrollPos: window.scrollY,
      isWindowScrolled: window.scrollY > 200,
    });

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    if (this.state.isModalVisible) return;

    const previousScrollPos = this.state.previousScrollPos;
    // iOS hides the header when scrolled to top
    // The cause is believed to be that it's possible to scroll a little below
    // 0 on the Y axis with a bounce back animation which scrolls back to 0.
    // scollPos is checked to be above 0 to exclude scroll events caused by the bounce back animation
    const scrolledDown =
      window.scrollY > previousScrollPos && window.scrollY > 0;

    this.setState({
      previousScrollPos: window.scrollY,
      isVisible: !scrolledDown,
      isWindowScrolled: window.scrollY > 200,
    });
  }

  handleModalClick() {
    this.setState({
      isModalVisible: false,
      isWindowScrolled: window.scrollY > 200,
    });
  }

  handleModalTriggerClick() {
    const willHideModal = this.state.isModalVisible;

    this.setState({
      isVisible: true,
      isWindowScrolled:
        !willHideModal || !(willHideModal && window.scrollY <= 200),
      isModalVisible: !this.state.isModalVisible,
    });
  }

  render() {
    return (
      <Root
        handleModalClick={this.handleModalClick}
        handleModalTriggerClick={this.handleModalTriggerClick}
        {...this.state}
        {...this.props}
      />
    );
  }
}

Header.propTypes = {
  color: PropTypes.string,
  clear: PropTypes.bool,
  invertTextOnMobile: PropTypes.bool,
  pathname: PropTypes.string,
  reverseBorder: PropTypes.bool,
  linkToStrata: PropTypes.bool,
};

Header.defaultProps = {
  color: "text",
  clear: false,
  invertTextOnMobile: false,
  pathname: "",
  reverseBorder: false,
  linkToStrata: false,
};

export default Header;

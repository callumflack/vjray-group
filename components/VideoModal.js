import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Flex, Overlay } from "rebass";
import FlexEmbed from "./FlexEmbed";
import theme from "./theme-new";
import Container from "./Container2";

const transition = {
  duration: 0.7,
  delay: 0.4,
  type: "ease-in-out",
};

// prettier-ignore
const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #151515;
  opacity: 0;
  visibility: hidden;
  z-index: -1;

  transition:
    opacity 0s,
    visibility 0s,
    z-index 0s;

  ${props => props.isVisible && css`
    opacity: 1;
    visibility: visible;
    z-index: 15;

    transition:
      opacity ${transition.duration}s ${transition.type} ${transition.delay}s,
      visibility 0s linear ${transition.delay}s,
      z-index 0s linear ${transition.delay}s;
  `}
`;

const ModalClose = styled.a`
  position: fixed;
  right: 3rem;
  top: calc(0.7 * 3rem);
  color: #fff;
  cursor: pointer;
  font-size: 5rem;
  font-family: ${theme.families.displayThin};
  line-height: 1;
`;

const VideoIframe = styled.iframe`
  height: 100%;
  width: 100%;
`;

class VideoModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const videoRef = this.video;
    const videoIframe = ReactDOM.findDOMNode(videoRef);
    const videoSrc = nextProps.isVisible ? videoRef.props["data-src"] : "";

    videoIframe.setAttribute("src", videoSrc);
  }

  handleKeyDown(event) {
    if (event.key === "Escape" && this.props.isVisible) {
      this.props.closeModal();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <Modal isVisible={this.props.isVisible}>
        <ModalClose onClick={this.props.closeModal}>&times;</ModalClose>
        <Flex align="center" style={{ height: "100vh" }}>
          <Container maxWidth="72em" w={1}>
            <FlexEmbed ratio="9/16">
              <VideoIframe
                ref={ref => (this.video = ref)}
                data-src="https://www.youtube.com/embed/1QJBUBemFKI?autoplay=1"
                frameborder="0"
                allowtransparency="true"
                webkitallowfullscreen=""
                mozallowfullscreen=""
                allowfullscreen=""
              />
            </FlexEmbed>
          </Container>
        </Flex>
      </Modal>
    );
  }
}

VideoModal.propsTypes = {
  isVisible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default VideoModal;

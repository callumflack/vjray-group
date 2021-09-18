import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import { Box } from "rebass";
import theme from "./theme";

// prettier-ignore
const Root = styled(Box)`
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  ${props => props.homeMap && css`
    background-position: 50% 100%;
    top: 30%;

    @media (min-width: 1536px) {
      background-position-x: 0;
    }

    &:before {
      background-blend-mode: multiply;
      background-image:
        linear-gradient(
          to bottom,
          white,
          rgba(64, 64, 112, 0.1) 40%
        );
      bottom: 0;
      content: " ";
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    }
  `}

  ${props => props.homeSydney && css`
    background-position: 0% 50%;
    color: ${theme.colors.text70};
    height: 100%;
    width: 100%;

    @media (min-width: 768px) {
      background-position-y: 50%;
    }

    @media (min-width: 1536px) {
      background-position-y: 90%;
    }
  `}

  ${props => props.who && css`
    max-width: none;
    @media (min-width: 1536px) { background-position: 30% 100%; }
  `}
`;

class CoverImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
    };
  }

  componentDidMount() {
    const baseUrl = "https://res.cloudinary.com/pw-img-cdn/image/fetch";
    const calcImageDimension = (length, pixelRatio) =>
      100 * Math.round(length * pixelRatio / 100);

    const image = ReactDOM.findDOMNode(this._image);
    const { clientWidth, clientHeight } = image;
    const pixelRatio = window.devicePixelRatio || 1.0;

    const imageWidth = calcImageDimension(clientWidth, pixelRatio);
    const imageHeight = this.props.square
      ? imageWidth
      : calcImageDimension(clientHeight, pixelRatio);

    const gPosition = this.props.face ? "g_face" : "g_center";
    const imageParams = `w_${imageWidth},h_${imageHeight},c_fill,${gPosition},f_auto`;
    const url = `${baseUrl}/${imageParams}/${this.props.src}`;

    this.setState({
      url: `url('${url}')`,
    });
  }

  render() {
    return (
      <Root
        ref={ref => (this._image = ref)}
        url={this.state.url}
        style={{
          backgroundImage: this.state.url,
        }}
        {...this.props}
      />
    );
  }
}

CoverImage.propTypes = {
  src: PropTypes.string.isRequired,
  square: PropTypes.bool,
  face: PropTypes.bool,
};

CoverImage.defaultProps = {
  square: false,
  face: false,
};

export default CoverImage;

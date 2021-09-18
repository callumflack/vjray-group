import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import { Box } from "rebass";
import styled from "styled-components";

/*
 * Pin is a wrapper used to position the img responsively.
 */

const Pin = styled(Box)`
  bottom: 0;
  display: flex;
  left: 50%;
  position: absolute;
  right: 0;
  top: 7%;
  transform: translateX(-50%);
  width: 100%;

  @media (min-width: 32em) {
    top: 0;
  }

  @media (max-width: 72em) {
    overflow: hidden;
  }

  @media (min-width: 72em) {
    width: 72em;
  }
`;

const Root = styled("img")`
  height: 100%;
  margin-left: -13%;
  margin-right: auto;
  max-width: initial;

  @media (min-width: 512px) {
    margin-left: auto;
    margin-right: -10%;
  }

  @media (max-height: 1000px) and (min-width: 1024px) {
    margin-right: 5%;
  }
`;

class Image extends React.Component {
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
    const imageHeight = calcImageDimension(clientHeight, pixelRatio);

    const gPosition = this.props.face ? "g_face" : "g_center";
    const imageParams = `h_${imageHeight},c_fill,${gPosition},f_auto`;
    const url = `${baseUrl}/${imageParams}/${this.props.img}`;

    this.setState({
      url,
    });
  }

  render() {
    return (
      <Pin>
        <Root
          ref={ref => (this._image = ref)}
          src={this.state.url}
          {...this.props}
        />
      </Pin>
    );
  }
}

Image.propTypes = {
  img: PropTypes.string.isRequired,
  face: PropTypes.bool,
};

Image.defaultProps = {
  face: false,
};

export default Image;

import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Root = styled("img")`
  height: 100%;
  max-width: initial;
  vertical-align: middle;
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
      100 * Math.round(length * (pixelRatio / 100));

    const image = ReactDOM.findDOMNode(this._image);
    const { clientWidth } = image;
    const pixelRatio = window.devicePixelRatio || 1.0;

    const imageWidth = calcImageDimension(clientWidth, pixelRatio);

    const gPosition = this.props.face ? "g_face" : "g_center";
    const imageParams = `w_${imageWidth},c_fill,${gPosition},f_auto`;
    const url = `${baseUrl}/${imageParams}/${this.props.img}`;

    this.setState({
      url,
    });
  }

  render() {
    return (
      <Root
        ref={ref => (this._image = ref)}
        src={this.state.url}
        {...this.props}
      />
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

import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components'
import theme from '../theme.js';
import { Box } from 'rebass';


/*
 * Pin is a wrapper used to position the img responsively.
 */

const Pin = styled(Box)`
  bottom: 0;
  display: flex;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
`

const Root = styled('img')`
  align-self: flex-end;
  display: flex;
  height: 100%;
  margin-left: auto;
  max-width: initial;

  ${props => props.listening && css`
    margin-left: -45%;
    @media (min-width: 768px) { margin-left: -10%; }
    @media (max-height: 1000px) and (min-width: 1024px) { margin-left: auto; }
    @media (min-width: 1280px) { margin-left: auto; margin-right: 10%; }
    @media (min-width: 1536px) { margin-right: 0; }
    @media (min-width: 1800px) { margin-right: 5%; }
    @media (min-width: 2000px) { margin-right: 20%; }
  `}

  ${props => props.contact && css`
    margin-left: -45%;
    @media (min-width: 768px) { margin-left: -18%; }
    @media (max-height: 1000px) and (min-width: 1024px) { margin-left: auto; }
    @media (min-width: 1024px) { margin-left: -5%; }
    @media (min-width: 1280px) { margin-left: auto; margin-right: 10%; }
    @media (min-width: 1536px) { margin-right: 5%; }
    @media (min-width: 1800px) { margin-right: 12%; }
    @media (min-width: 2000px) { margin-right: 13%; }
    @media (min-width: 2250px) { margin-right: 20%; }
  `}

  ${props => props.emergency && css`
    margin-left: -65%;
    @media (min-width: 768px) { margin-left: -28%; }
    @media (max-height: 1000px) and (min-width: 1024px) { margin-left: auto; }
    @media (min-width: 1280px) { margin-left: auto; margin-right: 17%; }
    @media (min-width: 1536px) { margin-right: 12%; }
    @media (min-width: 1800px) { margin-right: 18%; }
    @media (min-width: 2000px) { margin-right: 20%; }
    @media (min-width: 2250px) { margin-right: 25%; }
  `}

  ${props => props.what && css`
    margin-left: -45%;
    @media (min-width: 768px) { margin-left: -15%; }
    @media (min-width: 1024px) { margin-left: -1%; }
    @media (max-height: 1000px) and (min-width: 1024px) { margin-left: 3%; }
    @media (min-width: 1280px) { margin-left: auto; margin-right: 4%; }
    @media (min-width: 1536px) { margin-right: -2%; }
    @media (min-width: 1800px) { margin-right: 8%; }
    @media (min-width: 2000px) { margin-right: 16%; }
    @media (min-width: 2250px) { margin-right: 18%; }
  `}
`

// const Image = props => (
//   <Pin>
//     <Root {...props} src={props.src} />
//   </Pin>
// )

class Image extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      url: '',
    }
  }

  componentDidMount() {
    const baseUrl = 'https://res.cloudinary.com/pw-img-cdn/image/fetch'
    const calcImageDimension = (length, pixelRatio) => 100 * Math.round(length * pixelRatio / 100)

    const image = ReactDOM.findDOMNode(this._image)
    const { clientWidth, clientHeight } = image
    const pixelRatio = window.devicePixelRatio || 1.0

    const imageWidth = calcImageDimension(clientWidth, pixelRatio)
    const imageHeight = calcImageDimension(clientHeight, pixelRatio)

    const gPosition = this.props.face ? 'g_face' : 'g_center'
    const imageParams = `h_${imageHeight},c_fill,${gPosition},f_auto`
    const url = `${baseUrl}/${imageParams}/${this.props.img}`

    this.setState({
      url: url,
    });
  }

  render() {
    return (
      <Pin>
        <Root
          ref={(ref) => this._image = ref}
          src={this.state.url}
          {...this.props}
        />
      </Pin>
    )
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

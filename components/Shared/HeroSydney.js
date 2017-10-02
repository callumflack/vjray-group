import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';

import styled, { css } from 'styled-components';
import { Box } from 'rebass';
import hoc from './hoc'
import theme from '../theme.js';

import Container from './Container.js';
import { Text, LineBreak } from './Text.js';
import { Display, Subheadline  } from './Headline.js';
import Button from './Button.js';
import CoverImage from './CoverImage'


const Root = styled(Box)`
  height: 80vh;

  @media (max-height: 736px) {
    min-height: 90vh;
  }

  @media (max-height: 800px) {
    min-height: 80vh;
  }

  @media (min-width: 1024px) {
    height: 70vh;
  }
`;

const FullBoxHeight = styled.div`
  height: 100%;
  position: relative;
`;

const transition = {
  duration: 0.7,
  delay: 0.4,
  type: 'ease-in-out'
};


class SydneyBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Root>
        <FullBoxHeight>
          <CoverImage homeSydney src='http://res.cloudinary.com/pw-img-cdn/image/upload/v1504164089/home-sydney_qrh7b8.jpg' />

          <Container
            mw='sm'
            textCenter
            relative
            pt={[ 4, 4, 5, 5, 6 ]}
          >
            <Subheadline color='brandAlt' children='Dependable and effective' />
            <Display color='brandAlt'>
              We believe in better <LineBreak bp='1' m='auto'>Strata management for Sydney.</LineBreak>
            </Display>
            <Text
              color='text'
              mb={3}
              mx='auto'
              w={[ 1, 10/12 ]}
            >
              We know that our job is much more that just looking after buildings. Its the people that matter. We know that our job is much more that just looking after buildings. Its the people that matter.
            </Text>
            <Text font='textMedium'>
              <Button
                color='brandAlt'
                bg='white'
                icon
                children='Visit VJ Ray Strata'
              />
            </Text>
          </Container>

        </FullBoxHeight>
      </Root>
    )
  }
}

export default SydneyBox

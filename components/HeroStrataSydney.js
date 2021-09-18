import React from 'react';
import Link from 'next/link';

import styled, { css } from 'styled-components';
import { Flex, Box } from 'rebass';
import { FlexEmbed } from './FlexEmbed';
import hoc from './hoc'
import theme from './theme';
import Container from './Container2';
import { Text } from './Texts';
import LineBreak from './LineBreak';
import { Display, Subheading  } from './Headings';
import Button from './Button';
import CoverImage from './CoverImage';
import VideoModal from './VideoModal';


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

class SydneyBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contentIsVisible: true,
    };
  }

  render() {
    return (
      <Root>
        <VideoModal
          isVisible={!this.state.contentIsVisible}
          setContentVisibility={this.setContentVisibility}
          closeModal={() => this.setState({ contentIsVisible: true })}
        />

        <FullBoxHeight>
          <CoverImage homeSydney src='http://res.cloudinary.com/pw-img-cdn/image/upload/v1504164089/home-sydney_qrh7b8.jpg' />

          <Container
            mw='sm'
            textCenter
            relative
            pt={[ 4, 4, 5, 5, 6 ]}
          >
            <Subheading color='brandAlt' children='Dependable and effective' />
            <Display color='brandAlt' dangerouslySetInnerHTML={{ __html: this.props.headline}} />
            <Text
              color='text'
              mb={3}
              mx='auto'
              w={[ 1, 10/12 ]}
              dangerouslySetInnerHTML={{ __html: this.props.subheadline }}
            />
            <Text font='textMedium'>
              <Button
                color='brandAlt'
                bg='white'
                invert
                icon
                onClick={() => this.setState({ contentIsVisible: false })}
                children='Watch video'
              />
            </Text>
          </Container>

        </FullBoxHeight>
      </Root>
    )
  }
}

export default SydneyBox

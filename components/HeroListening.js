import React from 'react';
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import hoc from './hoc'
import theme from '../theme'

import { LargeText, LineBreak } from './Text'
import { Headline, Display } from './Headline'
import CoverImage from './CoverImage'

import Image from './Image'
import { HeroBox, HeroContainer, HeroFlex, HeroTitleBox } from './Hero'
import FormQuickQuote from '../FormQuickQuote'


const StyledHeroBox = styled(HeroBox)`
  background-color: ${theme.colors.beige};

  @media (max-width: 512px) {
    &:after {
      background-image:
        linear-gradient(
          to right,
          rgba(223, 212, 184, 0.5),
          rgba(223, 212, 184, 0.1) 100%
        );
    }
  }
`

// ml={[ null, 3 ]}
{/* <CoverImage
  constrain
  avoidMenuAtLaptopSize
  listening
  src='http://res.cloudinary.com/pw-img-cdn/image/upload/v1503542523/home-hero_eq4eot.jpg'
/> */}
const HeroListening = () => (
  <StyledHeroBox>
    <Image listening img='http://res.cloudinary.com/pw-img-cdn/image/upload/v1503542523/home-hero_eq4eot.jpg' />
    <HeroContainer mw='lg'>
      <HeroFlex>
        <HeroTitleBox width={[ 5/10, 5/12, 6/12 ]} mb={[ 3, 4 ]}>
          <Display mb={2}>
            Skip the hassle of <LineBreak>Strata Management.</LineBreak>
          </Display>
          <LargeText children='At VJ Ray Strata, we understand how valuable your peace of mind is.' />
        </HeroTitleBox>
      </HeroFlex>
    </HeroContainer>

    <FormQuickQuote />
  </StyledHeroBox>
);

export default HeroListening

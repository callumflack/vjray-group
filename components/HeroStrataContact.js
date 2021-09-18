import React from 'react';
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import theme from './theme-new'
import { LargeText } from './Text'
import LineBreak from "./LineBreak";
import { Display, Headline, MobileSubheadline } from './Headline'
import Image from './Image'
import { HeroBox, HeroContainer, HeroFlex, HeroTitleBox } from './Hero'


// #cbd7fc,
const StyledHeroBox = styled(HeroBox)`
  background-color: #d7e5eb;
  background-color: #eaf3f7;
  background-color: initial;
  background-image: initial;
  background-image:
    linear-gradient(
      to bottom,
      rgba(62, 62, 157, 0.25),
      #eaf3f7 80%
    );

  @media (max-width: 512px) {
    &:after {
      background-image:
        linear-gradient(
          to right,
          rgba(62, 62, 157, 0.2),
          rgba(62, 62, 157, 0.4) 50%
        );

    }
  }

`

{/* <CoverImage constrain contact src='http://res.cloudinary.com/pw-img-cdn/image/upload/v1503618861/hero-contact-_awgf0r.png' /> */}

const HeroContact = props => (
  <StyledHeroBox showAfterScreen avoidMenuAtLaptopSize>
    <Image contact img='http://res.cloudinary.com/pw-img-cdn/image/upload/v1503618861/hero-contact-_awgf0r.png' />
    <HeroContainer mw='rg'>
      <HeroFlex>
        <HeroTitleBox
          invertTextOnMobile
          width={[ 7/12, 5/12, 4/12, 4/12 ]}
          ml={[ 1, 3 ]}
          mb={[ 3, 4 ]}
        >
          <MobileSubheadline color='brandAlt' children='Contact us' />
          <Display color='brandAlt' mb={2} children='How can we help make your Strata living easier?' />
          <LargeText hideAtMobile color='text' children='Visit, call or write to us.' />
        </HeroTitleBox>
      </HeroFlex>
    </HeroContainer>
  </StyledHeroBox>
)

export default HeroContact
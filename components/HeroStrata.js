import React from 'react';
import styled from 'styled-components'
import { Flex, Box, Banner, ButtonCircle, Arrow } from 'rebass'
// import theme from './theme-new'
import { HeroBox, HeroContainer, HeroFlex, HeroTitleBox } from './Shared/Hero'
import { Text, LargeText } from './Shared/Texts'
import { Display, Subheading } from './Shared/Headings'
import LineBreak from './Shared/LineBreak'
import RespToggle from './Shared/ResponsiveToggle'
import CoverImage from './Shared/CoverImage'
import { Button } from './Shared/Buttons'


const StyledHeroBox = styled(HeroBox)`
  --Hero-height: 70vh !important;
  --Hero-height-mobile: 70vh !important;
  align-items: initial;
  background-color: #4F90C8;

  &:after {
    background-color: rgba(255, 255, 255, 0.15);
    background-image:
      linear-gradient(
        to bottom,
        rgba(18, 150, 222, 1),
        rgba(18, 150, 222, 0.4) 75%
      );
    background-blend-mode: multiply;
    bottom: 0;
    content: " ";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`

const StyledBanner = styled(Banner)`
  height: 70vh;
  position: relative;

  &:after {
    background-color: rgba(255, 255, 255, 0.15);
    background-image:
      linear-gradient(
        to bottom,
        rgba(18, 150, 222, 1),
        rgba(18, 150, 222, 0.4) 75%
      );
    background-blend-mode: multiply;
    bottom: 0;
    content: " ";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`

const StyledButton = styled(Button)`
  span {
    border-top: 0.3125em solid transparent;
    border-bottom: 0.3125em solid transparent;
    border-left: 0.4375em solid;
    border-right: 0;
  }
`;

{/* <CoverImage who src="http://res.cloudinary.com/pw-img-cdn/image/upload/v1507095035/hero-cronulla-bw_glru1c.jpg" /> */}

{/* <StyledHeroBox is="section" py={[4, 4, 5, 5]}> */}

const HeroStrata = props => (
  <StyledBanner 
    is="section" 
    py={[4, 4, 5, 5]}
    backgroundImage="http://res.cloudinary.com/pw-img-cdn/image/upload/v1507095035/hero-cronulla-bw_glru1c.jpg"
  >
    <HeroContainer textCenter style={{ zIndex: 1 }}>
      <Box 
        w={[7 / 12, 5 / 6, 6 / 12, 2 / 3]} 
        mx="auto" 
        mb={[4, 5, 6]}
      >

        <Subheading 
          center 
          border 
          color="white" 
          children={props.subhead} 
        />
        <Display
          center
          color="white"
          dangerouslySetInnerHTML={{ __html: props.headline }}
        />
        <Text
          center
          color="white"
          dangerouslySetInnerHTML={{ __html: props.lede }}
        />

        <Text 
          center 
          noUnderline 
          family="textMedium"
          mt={3}
        >
          <StyledButton
            fontSize={[2, 2, 2, 3]}
            bg="white"
            color="brandAlt"
            px={3}
            icon
            href="https://vjraystrata.com.au"
          >
            Visit VJ Ray Strata
          </StyledButton>
        </Text>
        
      </Box>
    </HeroContainer>
  </StyledBanner>
);

export default HeroStrata
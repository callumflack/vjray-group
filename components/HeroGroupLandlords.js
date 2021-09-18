import React from 'react';
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import theme from './theme-new'
import { LargeText } from './Text'
import LineBreak from "./LineBreak";
import { Display, Headline, MobileSubheadline } from './Headline'
import Image from './Image'
import { HeroBox, HeroContainer, HeroFlex, HeroTitleBox } from './Hero'


const StyledHeroBox = styled(HeroBox)`
  background-image: linear-gradient(
    to bottom,
    rgba(222, 202, 178, 0.4),
    ${theme.colors.beige} 70%
  );
`;

const HeroContact = props => (
  <StyledHeroBox>
    <HeroContainer maxWidth="72em">
      <HeroFlex>
        <HeroTitleBox width={[ 7/12, 5/12, 4/12, 4/12 ]} ml={[ 2, 4 ]} mb={[ 3, 4 ]}>
          <MobileSubheadline color='brand' children='Contact us' />
          <Display color='brand' mb={2} children='Rental Property Management headline.' />
          <LargeText hideAtMobile color='text' children='Subheadline if required.' />
        </HeroTitleBox>
      </HeroFlex>
    </HeroContainer>
  </StyledHeroBox>
)

export default HeroContact
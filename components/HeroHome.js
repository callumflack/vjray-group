import Link from 'next/link'
import React from 'react';
import styled from 'styled-components'
import { Box, Arrow } from 'rebass'
import theme from './theme-new'
import {
  HeroBox,
  HeroContainer,
  HeroFlex,
  HeroTitleBox,
} from './Shared/Hero'
import Image from "./Shared/Image";
import { Text, LargeText } from "./Shared/Text";
import { Display } from "./Shared/Headline";
import { ButtonOutline } from "./Shared/Buttons";


const StyledHeroBox = styled(HeroBox)`
  background-image: linear-gradient(
    to bottom,
    rgba(222, 202, 178, 0.4),
    ${theme.colors.beige} 70%
  );
`;

const StyledButton = styled(ButtonOutline)`
  border-radius: 99999px;

  span {
    border-top: 0.3125em solid transparent;
    border-bottom: 0.3125em solid transparent;
    border-left: 0.4375em solid;
    border-right: 0;
  }
`;

const HeroHome = props => (
  <StyledHeroBox>
    <Image
      what
      img="http://res.cloudinary.com/pw-img-cdn/image/upload/v1503618862/hero-what-_i582ye.png"
    />
    <HeroContainer maxWidth="1140px">
      <HeroFlex>
        <HeroTitleBox width={[5 / 10, 5 / 12, 6 / 12]} mb={[3, 4]} ml={4}>
          <Display
            mb={2}
            dangerouslySetInnerHTML={{ __html: props.headline }}
          />

          {props.subheadline && <LargeText>{props.subheadline}</LargeText>}

          {props.button && (
            <Link href="">
              <a>
                <Text font="textMedium" mt={3}>
                  <ButtonOutline icon color="brand" px={3}>
                    Watch Video
                  </ButtonOutline>
                </Text>
              </a>
            </Link>
          )}
        </HeroTitleBox>
      </HeroFlex>
    </HeroContainer>

    {props.children}
  </StyledHeroBox>
);

export default HeroHome

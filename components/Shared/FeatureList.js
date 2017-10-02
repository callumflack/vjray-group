import styled from 'styled-components'
import theme from '../theme'
import { icons } from '../constants'

import { Box, Border } from 'rebass'
import { Grid } from 'grid-styled'
import hoc from './hoc'

import { Headline } from './Headline'
import { Text, SmallText } from './Text'
import Icon from './Icon';



const GridRoot = styled(Grid)`
  @media (max-width: 1024px) {
    :not(first-child) {
      margin-top: 1.5rem;
    }
  }`

const Feature = props => (
  <StyledGrid>
    <Border color={theme.colors.brand} mb={2} p={1}>
      <StyledIcon icon={props.icon} />
      <Header>{props.header}</Header>
    </Border>

    <Lede>{props.lede}</Lede>
  </StyledGrid>
)

const StyledGrid = props =>
  <GridRoot w={[ 1, 1/2, 1/2, 1/4 ]} px={3} {...props} />

const Header = (props) =>
  <Headline font='displayMedium' fontSize={[ 3, 4 ]} mt={[ 0, 2 ]} mb={[ 1, 2 ]} {...props} />

const Lede = styled(SmallText)`
  color: ${theme.colors.text70} !important;`

const StyledIcon = (props) =>
  <Icon border color='brand' size='90' icon={ props.icon } />

const RootDivider = styled(Box)`
  @media (max-width: 1024px) {
    display: none;
  }`

const Divider = () => (
  <RootDivider>
    <Text font='displayLight' fontSize={[ 6, 7 ]} color='brand' mx={2}>+</Text>
  </RootDivider>
);

const FeatureList = () => (
  <Box w={[ 5/6, 5/6, 5/6, 1 ]} mx='auto' mt={[ 2, 2, 2, 3 ]}>
    <Box mx={-3}>
      <Feature
        icon={icons.experience}
        header='Strata Management'
        lede="We've pretty much seen it all, so we know how to solve it."
      />
      <Feature
        icon={icons.lockin}
        header='Real Estate sales'
        lede="Stay because you're happy, not because you're stuck with us."
      />
      <Feature
        icon={icons.service}
        header='Real Estate rentals'
        lede="We're open Saturdays, because not everyone has time in work hours."
      />
      <Feature
        icon={icons.emergency}
        header='Real Estate valuations'
        lede="Emergencies happen. Speak to one of our senior staff anytime."
      />
    </Box>
  </Box>
);

export default FeatureList

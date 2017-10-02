import styled, { css } from 'styled-components'
import hoc from './hoc'
import theme from '../theme'


// ========================================================================
// THIS IS A WIP METHOD COMBINING BOTH STYLED-COMPONENTS AND STYLED-SYSTEM.
//
// These are our base Headline components.
// They can also be extended, e.g. Home/FeatureList:12 <Header />
//
// The styled-system gives us props for:
//   fontSize, fontFamily, color, width and space
//   as well as ternary props for the theme lineHeight object.
//
// Start with a styled-component that uses the hoc(), which provides access
// to the styled-system.

// Method:

// 1. Include any styles that are not allowed to change, or that styled-system
// doesn't cover.
//
// 2. Then wrap this root component with the flexible base styles for the
// component, and apply the styling-system props.
//
// This gives us the best of styled-components and a design system that
// uses responsive, flexible and portable themeing.
//
// NB. While not used here, styled-component's 'withComponent' extension
// allows use of alternate HTML tags, e.g.:
// Headline.h1 = Headline
// Headline.h2 = Headline.withComponent('h2')
// See: https://github.com/styled-components/styled-components/pull/814
// ========================================================================


// Higher order comp examples…
// const hoc = Comp =>
//   ({ width, ...props }) =>
//     <Comp {...props} w={width} />
//
// module.exports = (Component, props) => {
//   const SystemComponent = styled(Component)``
// }


// Set all available HTML tags
const H1 = hoc('h1').extend``
const H2 = hoc('h2').extend``
const H3 = hoc('h3').extend``
const H4 = hoc('h4').extend``
const H5 = hoc('h5').extend``


// Ruled styles
const RuledStyles = {
  borderTop: '1px solid currentColor',
  content: " ",
  display: 'block',
  height: '1px',
  margin: '0 auto ${theme.space[3]}px',
  width: '${theme.space[4]}px'
}


//  Display
const DisplayRoot = hoc('h1').extend`
  ${props => props.reverseShadow && css`
    text-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  `}

  ${props => props.ruled && css`
    &:before {
      border-top: 1px solid currentColor;
      content: " ";
      display: block;
      height: 1px;
      margin: 0 auto ${theme.space[3]}px;
      width: ${theme.space[4]}px;
    }
  `}
`

const Display = props =>
  <DisplayRoot
    color='brand'
    font='displayRegular'
    fontSize={[ 5, 5, 6, 7 ]}
    lineHeight='display'
    mt={[ 0, 1 ]}
    mb={[ 2, 2, 2, 3 ]}
    {...props}
  />


// Headline
const HeadlineRoot = hoc('h2').extend`
  ${props => props.ruled && css`
    &:before {
      border-top: 1px solid currentColor;
      content: " ";
      display: block;
      height: 1px;
      margin: 0 auto ${theme.space[3]}px;
      width: ${theme.space[4]}px;
    }
  `}
`

const Headline = props =>
  <HeadlineRoot
    color='brand'
    font='displayLight'
    fontSize={[ 4, 4, 5, 6 ]}
    lineHeight='headline'
    mb={2}
    {...props}
  />


// Meta Headline
const HeadlineMetaBaseStyles = {
    color: 'text',
    font: 'textMedium',
    fontSize: [ 0, 0, 1 ],
    letterSpacing: 'meta',
    lineHeight: 'display',
    uppercase: 'true'
}

const HeadlineMeta = props =>
  <H3
    {...HeadlineMetaBaseStyles}
    align='center'
    {...props}
  />

// Subheadline (ruled)
// Example of where HeadlineMeta.extend would make more sense?
const SubheadlineRoot = hoc('h4').extend`
  border-bottom: 1px solid currentColor;
  display: inline-block;
`

const Subheadline = props =>
  <SubheadlineRoot
    {...HeadlineMetaBaseStyles}
    mb={2}
    mx='auto'
    pb={[ 1, 2 ]}
    {...props}
  />

const MobileSubheadline = styled(Subheadline)`
  @media (min-width: 1024px) {
    display: none;
  }
`

// Detail Headline, currently used for form group
// Example of where HeadlineMeta.extend would make more sense?
// const HeadlineDetailRoot = hoc('h5').extend``
const HeadlineDetail = props =>
  <H5
    {...HeadlineMetaBaseStyles}
    align='initial'
    color='text'
    font='textLight'
    {...props} />

// Boxed Subheadline
// We can style() here because… why again?
const BoxedSubheadline = styled(HeadlineMeta)`
  --Header-height: 48px;
  align-items: center;
  display: flex;
  font-family: ${theme.fonts.textRegular};
  height: var(--Header-height);
  justify-content: center;

  ${props => props.bg && css`
    background-color: ${theme.colors[props.bg] || theme.colors.brand};
  `}

  ${props => props.inactive && css`
    background-color: ${theme.colors.grey};
    color: ${theme.colors.text70};
  `}
`

// `

export {
  Display,
  Headline,
  HeadlineMetaBaseStyles,
  HeadlineMeta,
  Subheadline,
  MobileSubheadline,
  BoxedSubheadline,
  HeadlineDetail,
}
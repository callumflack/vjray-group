import styled, { css } from 'styled-components'
import hoc from './hoc'
import theme from '../theme.js'

const ResponsiveToggle = hoc('span').extend`
  ${props => props.hideAtDesktop && css`
    @media (min-width: 1024px) {
      display: none;
    }
  `}

  ${props => props.hideAtTablet && css`
    @media (max-width: 768px) {
      display: none;
    }
  `}

  ${props => props.hideAtMobile && css`
    @media (max-width: 512px) {
      display: none;
    }
  `}
`

export default ResponsiveToggle

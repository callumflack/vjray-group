import styled from 'styled-components'
import { style } from 'styled-system'
import Rebass from 'rebass'

const textShadow = style({
  // React prop name
  prop: 'shadow',
  // The corresponding CSS property
  cssProperty: 'textShadow',
  // set a key to find values from `props.theme`
  key: 'shadows'
})

const ShadowText = styled(Rebass.Text)`
  ${textShadow}
`

export {
  ShadowText
}
import styled, { css } from 'styled-components'
import hoc from './hoc'
import theme from '../theme'

// https://codepen.io/sdras/pen/a3596da23d8f9463079ac57c8e3ee9f8?editors=1010
// https://github.com/zeit/next.js/tree/master/examples/svg-components
// https://medium.com/@david.gilbertson/icons-as-react-components-de3e33cb8792

// THIS?: https://github.com/jxnblk/reline

const Icon = props => (
  <IconRoot {...props}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox="0 0 90 90"
    >
      <rect fill="none" width='90px' height='90px' />
      <path
        d={props.icon}
      ></path>
    </svg>
  </IconRoot>
)

const IconRoot = hoc('span').extend`
  display: inline-block;
  line-height: 1;
  position: relative;
  text-align: center;

  > svg {
    --Icon-vertical-align: baseline;
    fill: currentColor;
    vertical-align: var(--Icon-vertical-align);
  }

  ${props => props.color && css`
    color: ${theme.colors[props.color] || 'currentColor'};
  `}
`

export default Icon;

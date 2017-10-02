import PropTypes from 'prop-types';
import Link from 'next/link'

import styled from 'styled-components'
import theme from '../theme'
import { Box } from 'rebass';

import { MediumText, LineBreak } from './Text'
import { Display } from './Headline'


const Root = styled(Box)`
  text-align: center;
`

const ContactAction = (props) => (
  <Root>
    <Display color={props.headlineColor || 'text' } font='displayRegular'>
      Call 1300 073 123
    </Display>

    <Box
      width={[ 1, 7/12 ]}
      mx='auto'
		>
			<MediumText color='text70'>
				"VJ Ray made everything easier. We all know our block is looked after, and friendly neighbours are far more easier to live with"
			</MediumText>
    </Box>
  </Root>
)

ContactAction.propTypes = {
  headlineColor: PropTypes.string,
  btnColor: PropTypes.string,
  withButton: PropTypes.bool,
  withByline: PropTypes.bool,
}

ContactAction.defaultProps = {
  headlineColor: 'text',
  withButton: false,
}

export default ContactAction

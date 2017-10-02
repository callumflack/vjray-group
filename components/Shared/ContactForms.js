import PropTypes from 'prop-types'

import { Box } from 'rebass'
import Container from './Container'
import { Display, Subheadline } from './Headline'
import { SmallText } from './Text'
import { Tabs, Pane } from './Tabs'

import FormContact from './FormContact'
import FormIssue from './FormIssue'


const Root = props => (
	<div>
		<Container textCenter>
			<Subheadline color='brandAlt' children='Get in touch' />
			<Display color='brand' mb={1} children='How can we help you?' />
			<SmallText pt={3} color='text70'>For emergencies, call 1300 073 123 any time.</SmallText>
		</Container>

		<Box mt={[ 3, 3, 3, 4]}>
			<Tabs selected={props.defaultForm === 'report' ? 1 : 0}>
				{props.tabs.map(tab =>
					<Pane label={tab.name} key={tab._id}>{tab.content}</Pane>)
				}
			</Tabs>
		</Box>
	</div>
)

class ContactForms extends React.Component {
  render() {
    const tabs = [{
      _id: 0,
      name: 'Quick response',
      content: <FormContact />
    }, {
      _id: 1,
      name: 'Report an issue',
      content: <FormIssue />
    }];

    return (
      <Root tabs={tabs} {...this.props} />
    )
  }
}

ContactForms.propTypes = {
	defaultForm: PropTypes.number
}

ContactForms.defaultProps = {
	defaultForm: 0,
}

export default ContactForms

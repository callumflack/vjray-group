import React from "react";
import PropTypes from "prop-types";
import { Box } from "rebass";
import { Tabs, Pane } from "./Tabs";
import FormContact from "./FormContact";
import FormIssue from "./FormIssue";

const Root = props => (
  <Box mt={[3, 3, 3, 4]}>
    <Tabs
      selected={props.defaultForm === "report" ? 1 : 0}
      brandColor={props.brandColor}
    >
      {props.tabs.map(tab => (
        <Pane label={tab.name} key={tab._id}>
          {tab.content}
        </Pane>
      ))}
    </Tabs>
  </Box>
);

class ContactForms extends React.PureComponent {
  render() {
    const tabs = [
      {
        _id: 0,
        name: "Quick response",
        content: <FormContact brandColor />,
      },
      {
        _id: 1,
        name: "Report an issue",
        content: <FormIssue brandColor />,
      },
    ];

    return <Root {...this.props} tabs={tabs} brandColor />;
  }
}

Root.propTypes = {
  brandColor: PropTypes.bool,
};

Root.defaultProps = {
  brandColor: false,
};

ContactForms.propTypes = {
  brandColor: PropTypes.bool,
  defaultForm: PropTypes.number,
};

ContactForms.defaultProps = {
  brandColor: false,
  defaultForm: 0,
};

export default ContactForms;

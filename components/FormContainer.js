import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Box } from "rebass";
import theme from "./theme";
import LaddaButton from "./LaddaButton";
import { Text } from "./Texts";
import { Form, SuccessMessage } from "./Form";

const Root = styled(Box)`
  background-color: white;
  border: 1px solid ${theme.colors.brandAlt};

  ${props =>
    props.brandColor &&
    css`
      border-color: ${theme.colors.brand} !important;
    `};
`;

class FormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);

    this.state = {
      formSent: false,
      canSubmit: false,
      loading: false,
    };
  }

  async handleSubmit(model) {
    this.setState({
      loading: true,
    });

    await this.props.submit(model);

    this.setState({
      formSent: true,
      loading: false,
    });
  }

  enableButton() {
    this.setState({
      canSubmit: true,
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  }

  render(props) {
    return (
      <Root brandColor={this.props.brandColor}>
        <Box p={[3, 4]}>
          <Form
            brandColor={this.props.brandColor}
            onValidSubmit={this.handleSubmit}
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            method={this.props.method}
            action={this.props.action}
          >
            {this.props.children}

            <Text right>
              {this.state.formSent && (
                <SuccessMessage>
                  Thanks! We&apos;ll contact you within 48 hours.
                </SuccessMessage>
              )}
              <LaddaButton
                bg={this.props.brandColor ? "brand" : "brandAlt"}
                loading={this.state.loading}
                type="submit"
                disabled={this.state.formSent || !this.state.canSubmit}
              >
                {this.state.formSent ? "Sent" : "Send"}
              </LaddaButton>
            </Text>
          </Form>
        </Box>
      </Root>
    );
  }
}

FormContainer.propTypes = {
  children: PropTypes.element.isRequired,
  submit: PropTypes.func.isRequired,
  brandColor: PropTypes.bool,
};

FormContainer.defaultProps = {
  brandColor: false,
};

export default FormContainer;

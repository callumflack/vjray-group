import React from "react";
import PropTypes from "prop-types";
import FormContainer from "./FormContainer";
import { Input, Textarea, FormGroup, FormGroupHeadline } from "./Form";
import { site, formspreeId } from "./constants";

class FormContact extends React.Component {
  async submit(model) {
    const response = await fetch(`https://formspree.io/${formspreeId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(model),
    });
  }

  render(props) {
    return (
      <FormContainer submit={this.submit} brandColor={this.props.brandColor}>
        <FormGroup>
          <FormGroupHeadline>Your details (Required)</FormGroupHeadline>

          {/* Formspree filters */}
          <div style={{ display: "none" }}>
            <Input type="text" name="_gotcha" value="" />
          </div>
          <Input
            type="hidden"
            name="_subject"
            value={
              site === "strata"
                ? "Strata website contact submission"
                : "Group website contact submission"
            }
          />

          <Input
            placeholder="Your name*"
            name="name"
            brandColor={this.brandColor}
            required
          />
          <Input
            placeholder="Your email*"
            name="email"
            brandColor={this.brandColor}
            validations={{ isEmail: true }}
            validationErrors={{ isEmail: "Not a valid email" }}
            required
          />
          <Input
            placeholder="Your phone number*"
            name="phoneNumber"
            brandColor={this.brandColor}
            validations="isExisty"
            required
          />
          <Textarea
            placeholder="Add your comments…"
            name="comments"
            brandColor={this.brandColor}
            rows="7"
          />

          {/* Formspree filters */}
          <div style={{ display: "none" }}>
            <Input type="text" name="_gotcha" value="" />
          </div>
          <Input
            type="hidden"
            name="_subject"
            value={
              site === "strata"
                ? "Strata website contact submission"
                : "Group website contact submission"
            }
          />
        </FormGroup>
      </FormContainer>
    );
  }
}

FormContact.propTypes = {
  brandColor: PropTypes.bool,
};

FormContact.defaultProps = {
  brandColor: false,
};

export default FormContact;

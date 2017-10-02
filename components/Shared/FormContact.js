import React from 'react'
import Formsy, { HOC } from 'formsy-react';

import insertGoogleTags from '../../lib/insert-google-tags.js';

import theme from '../theme'
import FormContainer from './FormContainer'
import {
  Form,
  Input,
  Select,
  Textarea,
  FormGroup,
  FormGroupHeadline,
} from './Form';


class FormContact extends React.Component {
  constructor(props) {
    super(props);
  }

  async submit(model) {
    const response = await fetch('https://formspree.io/xgaewyjx', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(model),
    });

    insertGoogleTags(document, `
      /* <![CDATA[ */
      var google_conversion_id = 1049342091;
      var google_conversion_language = "en";
      var google_conversion_format = "3";
      var google_conversion_color = "ffffff";
      var google_conversion_label = "kxCuCK_SrXUQi-Gu9AM";
      var google_remarketing_only = false;
      /* ]]> */
    `,);
  }

  render() {
    return (
      <FormContainer submit={this.submit}>
        <FormGroup>
          <FormGroupHeadline>Your details (Required)</FormGroupHeadline>

          <Input
            placeholder='Your name*'
            name='name'
            required
          />
          <Input
            placeholder='Your email*'
            name='email'
            validations={{
              isEmail: true
            }}
            validationErrors={{
              isEmail: 'Not a valid email'
            }}
            required
          />
          <Input
            placeholder='Your phone number*'
            name='phoneNumber'
            validations='isExisty'
            required
          />
          <Textarea
            placeholder='Add your comments…'
            name='comments'
            rows='7'
          />

          {/* Formspree filters */}
          <input type="text" name="_gotcha" style={{display: "none" }} />
          <input type="hidden" name="_subject" value="Strata website contact submission" />
        </FormGroup>
      </FormContainer>
    );
  }
}

export default FormContact;

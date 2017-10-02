import React from 'react'
import Formsy, { HOC } from 'formsy-react'
import styled, { css } from 'styled-components'
import theme from '../theme'
import { Text } from './Text'
import { Display, BoxedSubheadline, HeadlineDetail } from './Headline'


const Form = styled(Formsy.Form)`
  --fieldHeight: 54px;

  input,
  select,
  textarea,
  button {
    margin-top: 1rem;
  }

  input,
  select,
  textarea {
    border: 1px solid ${theme.colors.text20};
    color: ${theme.colors.text};
    height: var(--fieldHeight);
    padding: 0 1rem;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    resize: none;
    width: 100%;
    -moz-appearance: none;
    -webkit-appearance: none;

    &:focus,
    &:active,
    &:hover,
    &:visited {
      outline: 0;
    }

    &:focus {
      border-color: ${theme.colors.brandAlt};
      ${'' /* box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); */}
    }

    &::-webkit-input-placeholder { color: ${theme.colors.text40}; }
    &::-moz-placeholder          { color: ${theme.colors.text40}; }
    &:-ms-input-placeholder      { color: ${theme.colors.text40}; }
    &:-moz-placeholder           { color: ${theme.colors.text40}; }
  }

  textarea {
    min-height: var(--fieldHeight);
    height: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  select {
    background: #fff url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10'><path fill='%23333' d='m10,7.4l-7.4,-7.4l-2.6,0l10,10l10,-10l-2.6,0'/></svg>") no-repeat right .75rem center;
    background-size: 15px 10px;
    border-radius: 0;
    cursor: pointer;
  }
`;

const FormHeader = props =>
  <BoxedSubheadline bg='brandAlt' color='white' {...props} />

const FormGroup = styled.div`
  & + & {
    margin-top: 3rem;
  }
`;

const FormGroupHeadline = styled(HeadlineDetail)`
  margin-left: 1rem;
`;

const SuccessMessage = styled.span`
  color: ${theme.colors.text70};
  margin-right: 1em;
`;

const ErrorMessage = props =>
  <Text
    color='#f23030'
    fontSize={[ 0, 1 ]}
    lineHeight='feedback'
    {...props}
  />

const StyledSelect = styled.select`
  ${props => props.unselected && css `
    color: #B7B7BB !important;
  `}
`


class InputRoot extends React.Component {
  render() {
    return (
      <div>
        <input
          onChange={(e) => this.props.setValue(e.target.value)}
          placeholder={this.props.placeholder}
        />
        <ErrorMessage>{this.props.getErrorMessage()}</ErrorMessage>
      </div>
    )
  }
};

class SelectRoot extends React.Component {
  constructor(props) {
    super(props)

    //this.setValue = this.props.setValue.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      selected: false
    }
  }

  handleChange(e) {
    this.setState({
      selected: true
    })

    this.props.setValue(e.target.value)
  }

  render() {
    return (
      <div>
        <StyledSelect
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          unselected={!this.state.selected}
        >
          {this.props.children}
        </StyledSelect>
        <ErrorMessage>{this.props.getErrorMessage()}</ErrorMessage>
      </div>
    )
  }
};

class TextareaRoot extends React.Component {
  render() {
    return (
      <div>
        <textarea
          onChange={(e) => this.props.setValue(e.target.value)}
          placeholder={this.props.placeholder}
          rows={this.props.rows}
          cols={this.props.cols}
        />
        <ErrorMessage>{this.props.getErrorMessage()}</ErrorMessage>
      </div>
    )
  }
};

const Input = HOC(InputRoot);
const Select = HOC(SelectRoot);
const Textarea = HOC(TextareaRoot);

export {
  Form,
  Input,
  Select,
  Textarea,
  FormGroup,
  FormGroupHeadline,
  SuccessMessage,
  FormHeader,
};

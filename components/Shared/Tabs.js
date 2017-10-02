import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Flex } from 'rebass'
import { FormHeader } from './Form.js'

const Label = styled.a`
  flex-grow: 1;
  flex-basis: 0;
`;

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.selected
    };
  }

  _renderTitles() {
    function labels(child, idx) {
      const isSelected = this.state.selected === idx;

      return (
        <Label onClick={this.onClick.bind(this, idx)} href='#' key={idx}>
          <FormHeader role='tab' aria-controls={`panel${idx}`} inactive={!isSelected}>{child.props.label}</FormHeader>
        </Label>
      );
    }

   return (
      <Flex role='tablist'>
        {this.props.children.map(labels.bind(this))}
      </Flex>
    );
  }

  onClick(index, event) {
    event.preventDefault();

    this.setState({
      selected: index
    });
  }

  render() {
    return (
      <div>
        {this._renderTitles()}

        <div>
          {this.props.children[this.state.selected]}
        </div>
      </div>);
  }
}

const Pane = (props) => {
  return <div>{props.children}</div>;
}

Tabs.propTypes = {
  selected: PropTypes.number,
  chlidren: PropTypes.element,
};

Tabs.defaultProps = {
  selected: 0,
};

export {
  Tabs,
  Pane,
};

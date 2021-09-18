import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Flex } from "rebass"
import { FormHeader } from "./Form"

const Label = styled.a`
  flex-grow: 1;
  flex-basis: 0;
`

class Tabs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: this.props.selected,
    }
  }

  _renderTitles(props) {
    function labels(child, idx) {
      const isSelected = this.state.selected === idx

      return (
        <Label onClick={this.onClick.bind(this, idx)} href='#' key={idx}>
          <FormHeader
            role='tab'
            aria-controls={`panel${idx}`}
            brandColor={this.props.brandColor}
            inactive={!isSelected}
          >
            {child.props.label}
          </FormHeader>
        </Label>
      )
    }

   return (
      <Flex role='tablist'>
        {this.props.children.map(labels.bind(this))}
      </Flex>
    )
  }

  onClick(index, event) {
    event.preventDefault()

    this.setState({
      selected: index,
    })
  }

  render() {
    return (
      <div>
        {this._renderTitles()}

        <div>
          {this.props.children[this.state.selected]}
        </div>
      </div>)
  }
}

const Pane = props => <div>{props.children}</div>

Tabs.propTypes = {
  selected: PropTypes.number,
  brandColor: PropTypes.bool,
  children: PropTypes.element.isRequired,
}

Tabs.defaultProps = {
  selected: 0,
  brandColor: false,
}

Pane.propTypes = {
  children: PropTypes.element.isRequired,
}

export {
  Tabs,
  Pane,
}

import React from 'react'
import styled from 'styled-components'

class Space extends React.Component {
  render() {
    return (
      <div className={this.props.className}>{this.props.children}</div>
    )
  }
}

export default styled(Space)`
  width: ${(props) => props.tileWidth + 'px'};
  height: ${(props) => props.tileHeight + 'px'};
  border: solid purple;
  display: inline-flex;
`
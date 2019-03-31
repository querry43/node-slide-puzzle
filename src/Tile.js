import React from 'react'
import styled from 'styled-components'

class Tile extends React.Component {
  render() {
    return (
      <div className={this.props.className}>{this.props.children}</div>
    )
  }
}

export default styled(Tile)`
  width: ${(props) => props.tileWidth + 'px'};
  height: ${(props) => props.tileHeight + 'px'};
  border: solid blue;
  display: inline-flex;
`
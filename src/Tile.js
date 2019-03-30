import React from 'react'
import './Tile.css'

export default class Tile extends React.Component {
  render() {
    return (
      <div class="tile">{this.props.children}</div>
    )
  }
}

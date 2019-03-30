import React from 'react'
import './Board.css'

export default class Board extends React.Component {
  render() {
    return (
      <div class="board">{this.props.children}</div>
    )
  }
}

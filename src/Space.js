import React from 'react'
import './Space.css'

export default class Space extends React.Component {
  render() {
    return (
      <div class="space">{this.props.children}</div>
    )
  }
}

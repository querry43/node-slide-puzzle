import React from 'react'
import './App.css'
import Board from './Board'
import Space from './Space'
import Tile from './Tile'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Board>
          <Tile>1</Tile>
          <Tile>2</Tile>
          <Tile>3</Tile>
          <Tile>4</Tile>
          <Tile>5</Tile>
          <Tile>6</Tile>
          <Tile>7</Tile>
          <Tile>8</Tile>
          <Space>0</Space>
        </Board>
      </div>
    )
  }
}

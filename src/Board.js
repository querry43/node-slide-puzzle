import React from 'react'
import TileContainer from './TileContainer'
import './Board.css'

export default class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <h1>
          Slidey Widey
        </h1>
        <TileContainer
          boardTilesWide={this.props.boardTilesWide}
          boardTilesTall={this.props.boardTilesTall}
          tileHeight={this.props.tileHeight}
          tileWidth={this.props.tileWidth}
          tileMargin={this.props.tileMargin}
          tiles={this.props.tiles} />
        <h2>win? {this.isWin() ? 'Yes' : 'No'}</h2>
      </div>
    )
  }

  isWin() {
    const numTiles = this.props.boardTilesTall * this.props.boardTilesWide
    const sequentialTiles = Array(numTiles).fill().map((_, i) => i+1)
    const winTiles = sequentialTiles.map(tile => tile === numTiles ? 0 : tile)
    return JSON.stringify(this.props.tiles.map(i => parseInt(i, 10))) === JSON.stringify(winTiles)
  }
}
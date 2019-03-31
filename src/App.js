import React from 'react'
import './App.css'
import Board from './Board'
import queryString from 'query-string'


export default class App extends React.Component {
  render() {
    const query = queryString.parse(
      global.location.search,
      {arrayFormat: 'comma'}
    );

    global.console.log(query)

    const tiles = query.tiles || [
      1, 2, 3,
      4, 5, 6,
      7, 8, 0,
    ]

    const boardTilesWide = query.width || 3
    const boardTilesTall = query.height || 3

    const tileWidth = 100
    const tileHeight = 100
    const tileMargin = 6 // this is the border width

    return (
      <div className="App">
        <Board
          boardTilesWide={boardTilesWide}
          boardTilesTall={boardTilesTall}
          tileHeight={tileHeight}
          tileWidth={tileWidth}
          tileMargin={tileMargin}
          tiles={tiles} />
      </div>
    )
  }
}

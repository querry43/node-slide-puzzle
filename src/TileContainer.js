import React from 'react'
import Space from './Space'
import Tile from './Tile'
import styled from 'styled-components'

class TileContainer extends React.Component {
  render() {
    const tiles = this.props.tiles.map((i) => {
      return i > 0
        ? <Tile key={i} tileWidth={this.props.tileWidth} tileHeight={this.props.tileHeight}>{i}</Tile>
        : <Space key={i} tileWidth={this.props.tileWidth} tileHeight={this.props.tileHeight}>{i}</Space>
    })
    return (
      <div className={this.props.className}>{tiles}</div>
    )
  }
}

export default styled(TileContainer)`
  width: ${(props) => props.boardTilesWide * (props.tileWidth + props.tileMargin) + 'px'};
  height: ${(props) => props.boardTilesTall * (props.tileHeight + props.tileMargin) + 'px'};
  border: solid green;
  margin: auto;
`
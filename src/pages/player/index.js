import React from 'react'
import './styles.scss'
import Controls from './controls'
import Media from './media'
import { useSelector } from 'react-redux'
import { currentMediaSelector } from '../../store/player/player-selectors'

const Player = () => {
  const currentMedia = useSelector(currentMediaSelector)
  console.log(currentMedia)
  return (
    <div className="player-container">
      <Media />
      <Controls />
    </div>
  )
}

export default Player

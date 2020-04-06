import React from 'react'
import { useSelector } from 'react-redux'
import { timeSelector } from '../../store/player/player-selectors'
import Controls from './controls'
import Media from './media'
import ProgressBar from './progressBar'
import './styles.scss'

const Player = () => {
  const time = useSelector(timeSelector)
  return (
    <div className="player-container">
      <Media />
      <Controls />
      <ProgressBar />
      {time}
    </div>
  )
}

export default Player

import React from 'react'
import _ from 'lodash'
import './styles.scss'
import { useSelector, useDispatch } from 'react-redux'
import { progressSelector } from '../../../store/player/player-selectors'
import { jump } from '../../../store/player/player-slice'

const ProgressBar = () => {
  const progress = useSelector(progressSelector)
  const dispatch = useDispatch()

  return (
    <div className="progress-bar-wrapper">
      <div className="progress-bar-container">
        <input
          type="range"
          min="1"
          max="100"
          value="10"
          onChange={e => {
            dispatch(jump(_.toInteger(e.target.value)))
          }}
        />
        <div
          className="progress-bar"
          // onMouseUp={e => {
          //   debugger
          // }}
        >
          <div
            className="progress-bar-progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar

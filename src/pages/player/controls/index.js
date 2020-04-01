import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../../components/button'
import Icon from '../../../components/icon'
import { addFileThunk } from '../../../store/player/player-thunks'
import { clearFiles } from '../../../store/player/player-slice'
import './styles.scss'

const Controls = () => {
  const dispatch = useDispatch()

  const fileRef = useRef(null)

  return (
    <div className="player-controls">
      <div className="aux-controls">
        <Button
          onClick={() => {
            fileRef.current.click()
          }}
        >
          <Icon icon="fa-file" />
          <input
            multiple
            ref={fileRef}
            type="file"
            className="file-upload"
            name=""
            id=""
            onChange={e => dispatch(addFileThunk(e.target.files))}
          />
        </Button>
        <Button
          onClick={() => {
            dispatch(clearFiles())
          }}
        >
          <Icon icon="fa-file-o" />
        </Button>
      </div>
      <div className="main-controls">
        <Button>
          <Icon icon="fa-step-backward" />
        </Button>
        <Button>
          <Icon icon="fa-play" />
          {/* pause */}
        </Button>
        <Button>
          <Icon icon="fa-step-forward" />
        </Button>
      </div>
      <div className="aux-controls">
        <Button>A - B</Button>
        <Button>
          <Icon icon="fa-backward" />
        </Button>
        <Button>
          <Icon icon="fa-forward" />
        </Button>
      </div>
    </div>
  )
}

export default Controls

import React from 'react'
import './styles.scss'
import Icon from '../../../components/icon'
import Button from '../../../components/button'

const Controls = () => {
  return (
    <div className="player-controls">
      <div className="aux-controls">
        <Button>
          <Icon icon="fa-file" />
          {/* <input
            ref={fileRef}
            type="file"
            className="file-upload"
            name=""
            id=""
            onChange={e => dispatch(attachFileAction(e.target.files))}
          /> */}
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

import React from 'react'
import { useSelector } from 'react-redux'
import { currentMediaSelector } from '../../../store/player/player-selectors'
import { base64MimeType } from '../../../util'
import './styles.scss'

const Media = () => {
  const media = useSelector(currentMediaSelector)
  const mimeTYpe = base64MimeType(media)
  if (!media) return null
  return (
    <div className="player-media">
      {`${mimeTYpe}`.match('video/') && (
        <video width="400">
          <source src={media} type={mimeTYpe} />
        </video>
      )}
    </div>
  )
}

export default Media

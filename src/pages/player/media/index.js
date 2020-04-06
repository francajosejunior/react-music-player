import React, { useRef, useEffect } from 'react'
import _ from 'lodash'
import { useSelector, useDispatch } from 'react-redux'
import {
  currentMediaSelector,
  isPlayingSelector,
  isPausedSelector,
  jumpSelector
} from '../../../store/player/player-selectors'
import { base64MimeType } from '../../../util'
import './styles.scss'
import { setTime, setDuration } from '../../../store/player/player-slice'

const isVideoPlaying = video =>
  !!(
    video.currentTime > 0 &&
    !video.paused &&
    !video.ended &&
    video.readyState > 2
  )

const Media = () => {
  const dispatch = useDispatch()
  const media = useSelector(currentMediaSelector)
  const isPlaying = useSelector(isPlayingSelector)
  const isPaused = useSelector(isPausedSelector)
  const jump = useSelector(jumpSelector)

  const mediaRef = useRef(null)
  const mimeTYpe = base64MimeType(media)

  useEffect(() => {
    const media = mediaRef.current
    if (media && isPlaying && !isPaused) {
      if (!isVideoPlaying(media)) {
        media.play()
      }
    }

    if (media && isPlaying && isPaused) {
      if (isVideoPlaying(media)) {
        media.pause()
      }
    }
  }, [isPlaying, isPaused])

  useEffect(() => {
    if (!_.isNull(jump) && mediaRef.current) {
      mediaRef.current.currentTime = jump
    }
  }, [jump])

  if (!media) return null
  return (
    <div className="player-media">
      {`${mimeTYpe}`.match('video/') && (
        <video
          width="400"
          ref={mediaRef}
          onTimeUpdate={e => dispatch(setTime(e.target.currentTime))}
          onLoadStart={e => {
            const target = e.target
            setTimeout(() => {
              dispatch(setDuration(target.duration))
            }, 500)
          }}
        >
          <source src={media} type={mimeTYpe} />
        </video>
      )}
    </div>
  )
}

export default Media

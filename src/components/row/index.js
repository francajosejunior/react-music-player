import React from 'react'
import './style.scss'

const Row = ({
  calssName,
  style = {},
  children,
  oppositeAlign = false,
  alignToEnd = false,
  noMargin = false,
  verticalAlign = false
}) => {
  return (
    <div
      style={style}
      className={`row ${oppositeAlign && 'oposite-sides'} ${
        alignToEnd ? 'align-to-end' : ''
      } ${noMargin ? 'no-margin' : ''}
      ${verticalAlign ? 'vertical-align' : ''}`}
    >
      {children}
    </div>
  )
}

export default Row

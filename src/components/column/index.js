import React from 'react'
import './column.scss'

const Col = ({
  children,
  className = '',
  style = {},
  width,
  widthPercent = false,
  withMargin = true
}) => {
  const widthComponente = isNaN(width) ? '100%' : width + 2 * 5.912
  return (
    <div
      style={{
        width: widthPercent || widthComponente,
        ...style
      }}
      className={`default-column ${withMargin ? 'column' : className}`}
    >
      {children}
    </div>
  )
}

export default Col

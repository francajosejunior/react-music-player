import React from 'react'
import './style.scss'

const Label = ({ children, inlineLabel, style, autoWidth }) => {
  return (
    <label
      className={`${inlineLabel ? 'inline-label' : 'label'} ${
        autoWidth ? 'auto-width' : ''
      }`}
      style={style}
    >
      {children}
    </label>
  )
}

export default Label

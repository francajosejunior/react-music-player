import './style.scss'
import React from 'react'

const Tile = ({
  label,
  value,
  color,
  size,
  icon,
  animate,
  onClick,
  notClickable = true
}) => {
  return (
    <div
      className={`tile ${size || 'medium'} ${animate ? 'animate' : ''} ${
        notClickable ? 'unclickable' : ''
      }`}
      style={{
        backgroundColor: color,
        borderColor: color
      }}
      onClick={onClick}
    >
      <label className={`label ${notClickable ? 'unclickable' : ''}`}>
        {label}
      </label>
      <div className="value">{value}</div>
      <div className="icon">{icon}</div>
    </div>
  )
}

export default Tile

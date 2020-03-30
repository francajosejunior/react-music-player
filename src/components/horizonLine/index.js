import React from 'react'
import './style.scss'

export default function HorizonLine({ backgroundColor }) {
  return (
    <hr
      className="horizonLine"
      style={backgroundColor ? { background: backgroundColor } : {}}
    />
  )
}

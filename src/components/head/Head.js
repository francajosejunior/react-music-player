import React from 'react'
import './style.scss'

export default function Head({ title, description }) {
  return (
    <div className="head">
      <h1>{title}</h1>
      <span>{description}</span>
    </div>
  )
}

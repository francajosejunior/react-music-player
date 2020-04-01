import React from 'react'
import './styles.scss'

const Button = ({ className = '', children, ...props }) => {
  return (
    <button className={`btn-wrapper ${className}`} {...props}>
      <span className="btn-content">{children}</span>
    </button>
  )
}

export default Button

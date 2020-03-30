import React from 'react'
import './styles.scss'

const Checkbox = ({ className, ...props }) => {
  return (
    <input type="checkbox" className={`custom-check ${className}`} {...props} />
  )
}

export default Checkbox

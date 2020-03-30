import React from 'react'
import './style.scss'

function SearchButton(props) {
  const { children, type = 'button', disabled, ...rest } = props

  return (
    <div className="container-search-button">
      <button
        className="search-button"
        type={type}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    </div>
  )
}

export default SearchButton

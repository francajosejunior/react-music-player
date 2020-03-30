import React, { useState, useCallback, useEffect, useRef } from 'react'
import { DebounceInput } from 'react-debounce-input'
import Loader from 'react-loader-spinner'
import './style.scss'
import Label from '../label'

const search = require('../../images/search.png')

export default function SearchInput({
  placeholder,
  sendSearchValue,
  name,
  value,
  minLength = 2,
  debounceTimeout = 600,
  loading,
  inlineLabel,
  description,
  labelStyle,
  autoWidth
}) {
  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState(false)
  const [touched, setTouched] = useState(false)
  const inputEl = useRef(null)

  useEffect(() => {
    // sendSearchValue(searchValue)
    if (searchValue !== '') {
      setError(false)
    } else if (touched && searchValue === '') {
      setError(true)
    }
  }, [searchValue, sendSearchValue])

  const handleChange = useCallback(e => {
    const { value, name } = e.target
    setSearchValue(value)
    sendSearchValue(name, value)
  }, [])

  const handleFocus = () => {
    if (searchValue === '') {
      setError(true)
      setTouched(true)
    }
  }

  const handleBlur = () => {
    setTouched(false)
    setError(false)
  }

  return (
    <div
      className={`search-input ${error ? 'error' : ''} ${inlineLabel &&
        'label-line'}`}
    >
      {!!description && (
        <Label
          style={labelStyle}
          inlineLabel={inlineLabel}
          autoWidth={autoWidth}
        >
          {description}
        </Label>
      )}
      <div className="debounce-input">
        <DebounceInput
          className="debounce-search-input"
          inputRef={inputEl}
          onFocus={handleFocus}
          type="text"
          minLength={minLength}
          debounceTimeout={debounceTimeout}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          name={name}
          value={value}
        />
        <div className="search-input-icon">
          {loading ? (
            <Loader type="Oval" color="black" height={25} width={25} />
          ) : (
            <img src={search} alt="" height="25" width="25" />
          )}
        </div>
      </div>
    </div>
  )
}

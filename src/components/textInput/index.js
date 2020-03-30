import React, { useCallback } from 'react'
import maxLengthValidation from './maxLengthValidation'
import patternValidation from './patternValidation'
import './style.scss'
import Label from '../label'

const TextInput = ({
  onChange,
  type,
  className,
  placeholder,
  disabled,
  readOnly,
  maxLength = 100,
  maxValue = 9999999999999999,
  minValue,
  onlyPositive,
  alfanumeric,
  format,
  erro,
  style,
  autofocus,
  pattern, // Ex.: $ -> pattern={/^\d*$/}
  description,
  inlineLabel,
  marginTop,
  marginBottom,
  value = '',
  labelStyle,
  ...rest
  // meta: { touched, error, warning } apagar no merge
}) => {
  const custonChange = useCallback(
    event => {
      let isValid =
        maxLengthValidation(
          event,
          onlyPositive,
          type,
          maxValue,
          minValue,
          alfanumeric,
          maxLength
        ) && patternValidation(event, pattern)

      if (isValid) {
        onChange(event)
      } else {
        event.preventDefault()
      }
    },
    [alfanumeric, maxLength, maxValue, minValue, pattern, onlyPositive, type]
  )

  return (
    <div
      className={`input-text ${inlineLabel && 'label-line'}`}
      style={{ marginTop: marginTop, marginBottom: marginBottom }}
    >
      {!!description && (
        <Label style={labelStyle} inlineLabel={inlineLabel}>
          {description}
        </Label>
      )}
      <input
        onChange={custonChange}
        className={`entry ${className} ${erro ? 'input-erro' : ''}`}
        disabled={disabled}
        placeholder={placeholder}
        readOnly={readOnly}
        type={type}
        maxLength={maxLength}
        style={style}
        format={format}
        autoFocus={autofocus}
        value={value}
        {...rest}
      />
    </div>
  )
}

export default TextInput

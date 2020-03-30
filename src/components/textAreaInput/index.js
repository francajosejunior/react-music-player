import React from 'react'
import _ from 'lodash'
import './style.scss'
import Label from '../label'

const TextAreaInput = ({
  value,
  ref,
  className,
  name,
  onChange,
  disabled,
  style,
  maxLength = 400,
  input,
  erro,
  inlineLabel,
  description,
  labelStyle,
  placeholder = 'Escrever...'
}) => {
  const limitedValue = _.truncate(value, {
    omission: '',
    length: maxLength
  })

  const len = _.isNil(value) ? 0 : value.length

  return (
    <div className={`area ${inlineLabel && 'label-line'}`}>
      {!!description && (
        <Label style={labelStyle} inlineLabel={inlineLabel}>
          {description}
        </Label>
      )}
      <textarea
        disabled={disabled}
        className={`entry ${className}`}
        ref={ref}
        value={limitedValue || ''}
        name={name}
        maxLength={maxLength}
        placeholder={placeholder}
        style={{
          minHeight: '80px',
          ...style
        }}
        onChange={onChange || (() => {})}
      />
      <span className="counter">{`${len}/${maxLength}`}</span>
    </div>
  )
}

export default TextAreaInput

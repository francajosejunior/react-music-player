import React from 'react'
import './style.scss'
import Label from '../label'

const DateRangeContainer = ({
  inlineLabel,
  description,
  className,
  inicialDateComponent,
  endDateComponent,
  labelStyle,
  autoWidth
}) => {
  return (
    <div className={`input-range-date ${inlineLabel && 'label-line'}`}>
      {!!description && (
        <Label
          style={labelStyle}
          inlineLabel={inlineLabel}
          autoWidth={autoWidth}
        >
          {description}
        </Label>
      )}
      <div className={`range-container add-on ${className}`}>
        {inicialDateComponent}
        <span>até</span>
        {endDateComponent}
      </div>
    </div>
  )
}

export default DateRangeContainer

/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import moment from 'moment'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ptBR from 'date-fns/locale/pt-BR'
import './style.scss'
import { datePickerMask } from '../../util/generalUtilities'

registerLocale('pt-BR', ptBR)

const minDate = new Date(1900, 0, 1)
const maxDate = new Date(3000, 11, 31)

const securityDate = data => {
  const mData = moment(data)
  if (mData.isValid()) {
    const ret = mData.toDate()
    return ret
  }
  return null
}

const DateInput = props => {
  let ref = React.useRef()

  React.useEffect(() => {
    let el = ref.current?.input
    const mask = datePickerMask(
      el,
      props.minDate || minDate,
      props.maxDate || maxDate,
      props.dateFormat
    )
    mask.updateValue()
    return () => {
      mask.destroy()
    }
  })

  let proprieties = {
    ...props,
    onChange: props.dateHandle,
    selected: securityDate(props.date)
  }

  if (props.input) {
    proprieties = {
      ...props,
      onChange: value => {
        // props.input.onChange(value)
        setTimeout(() => {
          props.input.onChange(value)
        }, 100)
      },
      onBlur: () => props.input.onBlur(props.input.value),
      onFocus: () => props.input.onFocus(),
      selected: securityDate(props.input.value)
    }
  }

  return (
    <div className="container-periodo">
      <DatePicker
        ref={ref}
        autoComplete="off"
        minDate={minDate}
        maxDate={maxDate}
        isClearable={!proprieties.readOnly}
        clearButtonTitle="x"
        className={`entry ${proprieties.className} ${
          proprieties.error ? 'input-error' : ''
        }`}
        locale="pt-BR"
        todayButton={'Hoje'}
        dateFormat="dd/MM/yyyy"
        {...proprieties}
      />
    </div>
  )
}

export default DateInput

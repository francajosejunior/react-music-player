import _ from 'lodash'
import entryValidation from './entryValidation'

export default (
  event,
  onlyPositive,
  type,
  maxValue,
  minValue,
  alfanumeric,
  maxLength
) => {
  let isValid = true

  isValid = entryValidation(
    event,
    onlyPositive,
    type,
    maxValue,
    minValue,
    alfanumeric
  )
  const len = (event.target?.value || '').length
  if (maxLength && len > maxLength) {
    isValid = false
  }

  return isValid
}

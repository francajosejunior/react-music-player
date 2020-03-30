import _ from 'lodash'

export default (event, onlyPositive, type, maxValue, minValue, alfanumeric) => {
  let valido = true
  if (onlyPositive && _.toInteger(event.target.value) < 0) {
    valido = false
  }

  if (type === 'number' && _.toInteger(event.target.value) > maxValue) {
    valido = false
  }

  if (type === 'number' && _.toInteger(event.target.value) < minValue) {
    valido = false
  }

  if (alfanumeric) {
    if (/[^ç\.\w\s-âãôõê]/.test(event.target.value)) {
      valido = false
    }
  }

  return valido
}

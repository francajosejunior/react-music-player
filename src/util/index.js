import * as uniqid from 'uniqid'
import moment from 'moment'
import _ from 'lodash'
import IMask from 'imask'

// #region REGEX
export const REGEX_CPF = /(\d{3})(\d{3})(\d{3})(\d{2})/
export const REGEX_REPLACE_CPF = '$1.$2.$3-$4'
export const REGEX_CNPJ = /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/
export const REGEX_REPLACE_CNPJ = '$1.$2.$3/$4-$5'

// #file extensions
export const allowedExtensions = ['pdf', 'png', 'jpeg', 'jpg']

export const classesComb = classesCollection => classesCollection.join(' ')

export const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// criar id unico
export const uid = () => uniqid()

export const datePickerMask = (
  elementHTML,
  minDate,
  maxDate,
  dateFormat = 'DD/MM/YYYY'
) => {
  const formatoMoment = dateFormat.toUpperCase()

  return new IMask(elementHTML, {
    mask: Date,
    pattern: formatoMoment,
    min: new Date(1900, 0, 1),
    max: new Date(3000, 0, 1),
    format: data => {
      return moment(data).format(formatoMoment)
    },
    parse: string => {
      return moment(string, formatoMoment)
    },
    blocks: {
      YYYY: {
        mask: IMask.MaskedRange,
        from: 1900,
        to: 3000
      },
      MM: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12
      },
      DD: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 31
      }
    }
  })
}

// Formada data para formato em português
export const datePortugueseFormat = dateEn => {
  const m = moment(dateEn, 'YYYY-MM-DDTHH:mm:ss')
  if (m.isValid()) {
    return m.format('DD/MM/YYYY')
  }
  return ''
}

// Formada data para formato em português
export const dateTimePortugueseFormat = dateEn => {
  const m = moment(dateEn, 'YYYY-MM-DDTHH:mm:ss')
  if (m.isValid()) {
    return m.format('DD/MM/YYYY HH:mm:ss')
  }
  return ''
}

export const formatMoney = value => {
  return (
    'R$ ' +
    (value ? _.toNumber(value) : 0).toLocaleString('pt-BR', {
      minimumFractionDigits: 2
      // maximumFractionDigits: 2
    })
  )
}

export const validTowDates = (start, end) => {
  if (start) {
    return moment(start).format('YYYY-MM-DD')
  }
  if (end) {
    return moment(end).format('YYYY-MM-DD')
  }
  return ''
}

export const CpfCnpjToNumber = cpfText =>
  _.isNull(cpfText) ? '' : (cpfText + '').replace(/\D/g, '')

export const leftComplete = (text, length, charecter) =>
  _.padStart(text, length, charecter)

export const CPFcomplete = cpf => leftComplete(CpfCnpjToNumber(cpf), 11, '0')

export const CPFformat = value =>
  CPFcomplete(value).replace(REGEX_CPF, REGEX_REPLACE_CPF)

export const telephoneFormat = value => {
  return `${value}`.replace(/^(\d{2})(\d+)(\d{4})$/, '($1) $2-$3')
}

export const whatsAppTelephoneFormat = value => {
  return `${value}`.replace(/^(\d{2})(\d{2})(\d+)(\d{4})$/, '+$1 ($2) $3-$4')
}

export const between = (value, start, end) => {
  let ret = value

  if (!_.isNil(start) && value < start) {
    ret = start
  }

  if (!_.isNil(end) && value > end) {
    ret = end
  }

  return ret
}
// Rerna propriedade de objeto de forma segura
export const safeProp = (fn, defaultValue = '') => {
  try {
    const valor = fn()
    return valor === null || valor === undefined ? defaultValue : valor
  } catch (e) {
    return defaultValue
  }
}

export const daysFromDate = (date, day, days) => {
  if (moment(date).isValid()) {
    const start = moment(date)
    const now = new Date()
    const daysOrDay = moment(now).diff(start, 'days') > 1 ? days : day
    return `${moment(now).diff(start, 'days')} ${daysOrDay}`
  }
  return ''
}

export const toBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })

export const createDownloadWhatsappFile = file => () => {
  let a = document.createElement('a')
  a.href = file?.link
  a.download = file?.name
  a.target = '_blank'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
export const axiosNoNotify = () => ({
  headers: { 'X-No-Notify': 'true' }
})

export const fileToBase64Async = file =>
  new Promise((resolve, reject) => {
    try {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        resolve(reader.result)
      }
      reader.onerror = erro => {
        console.log('Erro', erro)
        reject(erro)
      }
    } catch (error) {
      reject(error)
    }
  })

export const trimmStr = str => {
  const trimmedstr = str.replace(/\s+$/, '')
  return trimmedstr
}

export const checkStrOnlySpace = str => {
  if (!str.replace(/\s/g, '').length) {
    return true
  }
  return false
}

export const checkIfImage = file => {
  let isImg = []
  const toLower = file.toLowerCase()
  const extensions = ['gif', 'jpg', 'png', 'jpeg']
  for (let i = 0; i < extensions.length; i++) {
    if (toLower.indexOf(extensions[i]) !== -1) {
      isImg.push(extensions[i])
    }
  }
  return isImg.length
}

export const returnFileSize = number => {
  if (number < 1024) {
    return number + 'bytes'
  } else if (number >= 1024 && number < 1048576) {
    return (number / 1024).toFixed(1) + 'KB'
  } else if (number >= 1048576) {
    return (number / 1048576).toFixed(1) + 'MB'
  }
}

export const base64MimeType = encoded => {
  var result = null

  if (typeof encoded !== 'string') {
    return result
  }

  var mime = encoded.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)

  if (mime && mime.length) {
    result = mime[1]
  }
  return result
}

export function getFileNameWithExt(event) {
  if (
    !event ||
    !event.target ||
    !event.target.files ||
    event.target.files.length === 0
  ) {
    return
  }
  const name = event.target.files[0].name
  const lastDot = name.lastIndexOf('.')
  const fileName = name.substring(0, lastDot)
  const ext = name.substring(lastDot + 1)
  return {
    fileName,
    ext
  }
}

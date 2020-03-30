import moment from 'moment'
import store from '../store'

const getFileName = (xhr, url) => {
  let nomeArquivo
  const contentDisposition = xhr.getResponseHeader('Content-Disposition')
  if (contentDisposition === null) {
    nomeArquivo = url.split('/')[url.split('/').length - 1]
  } else {
    nomeArquivo = contentDisposition
      .replace(/^attachment;\sfilename=([^;]+)?;.+?$/, '$1')
      .replace(/"|'/g, '')
  }
  return nomeArquivo
}

export const downloadLink = (metodo, url, name = '') => {
  const state = store.getState().auth
  const token = state.user.token

  const xhr = new XMLHttpRequest()
  // const baseUrl = dominio()
  xhr.open(metodo, url, true)
  xhr.setRequestHeader('Authorization', `bearer ${token}`)
  xhr.responseType = 'blob'

  xhr.onload = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const blob = xhr.response
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = name.indexOf('.') === -1 ? getFileName(xhr, url) : name
      link.click()
    }
  }

  xhr.send()
}

export const downloadLinkWithoutXHR = (metodo, url, name = '') => {
  const link = document.createElement('a')
  link.href = url
  link.download = name
  link.target = '_blank'
  link.click()
}

/**
 * testar depois
  var xhr = new XMLHttpRequest()
  xhr.withCredentials = true

  xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === 4) {
      console.log(xhr.responseText)
      const link = document.createElement('a')
      link.href = url
      link.download = name
      link.target = '_blank'
      link.click()
    }
  })

  xhr.open(metodo, url)

  xhr.send()
 */

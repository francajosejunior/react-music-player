import api from './api'

export const fetchComboBoxItens = url => {
  const result = api.get(url)
  return result
}

export const fetchStatusComboBoxSlice = config => {
  return api.get('/Formalizacao/status', config)
}

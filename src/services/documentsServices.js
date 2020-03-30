import api from './api'

export const fetchDocumentsSlice = async () => {
  const result = await api.get('/Formalizacao/formalizacao-documento')
  // const mapedResult = mapResult(result)
  const mapedResult = result
  return mapedResult
}

import api from './api'

export const fetchFormalizationGrid = (payload, config) => {
  return api.post('/Formalizacao', payload, config)
}

import api from './api'

export const fetchMenu = userId => {
  const result = api.post('/menu', { id: userId })
  return result
}

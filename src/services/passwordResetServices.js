import api from './api'

export const fetchPasswordReset = (payload, config) => {
  return api.post('/PasswordReset', payload, config)
}

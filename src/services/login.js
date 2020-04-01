import api from './api'
import { sleep } from '../util/'

export const fetchLogin = async login => {
  const mapedLogin = {
    login: login.user,
    senha: login.password
  }
  return api.post('/usuario/login', mapedLogin)
}

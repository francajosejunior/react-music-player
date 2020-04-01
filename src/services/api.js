import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import configuration from '../configuration/index'
import { notify } from '../pages/notification/notificationSlice'
import { notificationTypeEnum } from './notificationServices'
import { logout } from '../pages/login/loginSlice'

let lastStatus = null
const api = axios.create({
  baseURL: configuration.BASE_URL,
  headers: {
    'Content-type': 'application/json; charset=utf-8'
  }
})

api.interceptors.request.use(request => {
  const store = require('./../store').default
  const token = store.getState().auth.user.token
  request.headers.Authorization = `Bearer ${token}`
  return request
})

api.interceptors.response.use(
  response => {
    return (
      response?.data?.ObjetoDeRetorno ||
      response?.data?.objetoDeRetorno ||
      response?.data
    )
  },
  error => {
    const store = require('./../store').default
    const { dispatch } = store

    if (axios.isCancel(error)) {
      return Promise.reject(error)
    }

    if (error?.config?.headers['X-No-Notify'] === 'true') {
      return Promise.reject(error)
    }

    if (error.response?.status === 404) {
      toastr.warning('Antenção', 'Filtro não retornou nenhum resultado')
      // toastr.warning('404', error.response.config.url)
    } else if (error.response?.status === 401 && lastStatus !== 401) {
      dispatch(notify('', 'Sua sessão expirou', notificationTypeEnum.ERROR))
      dispatch(logout())
    } else {
      const msg =
        error?.response?.data?.ObjetoDeRetorno?.Mensagem ||
        error?.response?.data?.objetoDeRetorno?.mensagem ||
        error?.response?.data?.mensagem ||
        error?.response?.data?.Mensagem ||
        error?.response?.data?.error_description ||
        error?.response?.statusText ||
        error?.response?.message ||
        'Falha na conexão com o servidor.'

      dispatch(notify('', msg, notificationTypeEnum.ERROR))
    }

    lastStatus = error.response?.status
    return Promise.reject(error)
  }
)

export const getCanceler = () => {
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()
  return {
    config: {
      cancelToken: source.token
    },
    cancel: source.cancel
  }
}

export default api

import moment from 'moment'
import api from './api'

export const fetchFormalizationDashboard = queryParams => {
  const { operationId, searchText, startDate, endDate, corbanId } = queryParams
  const payload = {
    operacaoId: isNaN(operationId) ? 0 : operationId,
    textoBusca: searchText,
    periodoDe: startDate ? moment(startDate).format('YYYY-MM-DD') : null,
    periodoAte: endDate ? moment(endDate).format('YYYY-MM-DD') : null,
    corbanId: corbanId
  }
  return api.post('/dashboard', payload)
  // return api.get('/dashboard')
}

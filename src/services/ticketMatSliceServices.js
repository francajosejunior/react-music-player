import api from './api'
import { whatsAppTelephoneFormat } from '../util/'

const mapResult = result => {
  const { canal, canalTelefone } = result
  const toCanal =
    canal && canalTelefone
      ? canal + '  ' + whatsAppTelephoneFormat(canalTelefone)
      : ' - '

  return {
    ...result,
    corban: result.corban.descricao,
    canal: toCanal,
    token: result.token || ' - ',
    proposals: (result.proposals || []).map(p => ({
      ...p,
      documents: p.documents.map(pdoc => {
        return {
          ...pdoc,
          included: false,
          updated: false,
          removed: false
        }
      })
    })),
    documents: (result.documents || []).map(d => {
      return {
        ...d,
        included: false,
        updated: false,
        removed: false
      }
    })
  }
}

export const fetchTicketSlice = async (payload, config) => {
  const result = await api.get(`/Formalizacao/${payload}`, config)
  // const mapedResult = mapResult(objetoDeRetorno)
  const mapedResult = mapResult(result)
  return mapedResult
}

export const saveTicketSlice = (payload, config) => {
  const result = api.post('/Formalizacao/Save', payload, config)
  return result
}

export const sendMsgTicketSlice = (payload, config) => {
  const result = api.post('/Sms/Send', payload, config)
  return result
}

export const historiesPdfExportSlice = (formalizationId, config) => {
  const result = api.get(
    `/Sms/GenerateSmsHistoryPdf/${formalizationId}`,
    config
  )
  return result
}

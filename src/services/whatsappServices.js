import api from './api'

export const fetchWhatsappMessages = async formalizationId =>
  api.get(`/message/${formalizationId}`)

export const sendMessage = async (formalizationId, message, file) =>
  api.post('/message/send', { formalizationId, message, file })

export const assumeChat = async (formalizationTalkLogId, operator) => {
  return api.get(`/message/assumeChat/${formalizationTalkLogId}/${operator}`)
}

export const exportPdf = async formalizationId => {
  return api.get(`/message/exportPdf/${formalizationId}`)
}

export const closeChat = async formalizationTalkLogId => {
  return api.get(`/message/closeChat/${formalizationTalkLogId}`)
}

import { fetchItens, fetchItensSuccess, fetchItensError } from './listReducer'
import { fetchComboBoxItens } from '../../services/comboBoxServices'

export const fetchComboBoxAction = (reducerName, url) => {
  return async dispatch => {
    try {
      dispatch(fetchItens(reducerName))
      const result = await fetchComboBoxItens(url)
      dispatch(fetchItensSuccess(reducerName, result))
    } catch (error) {
      console.log(error)
      dispatch(fetchItensError(reducerName, error))
    }
  }
}

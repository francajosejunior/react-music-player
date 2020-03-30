const FETCH_ITEMS_PENDING = 'list/FETCH_ITEMS_PENDING'
const FETCH_ITEMS_SUCCESS = 'list/FETCH_ITEMS_SUCCESS'
const FETCH_ITEMS_ERROR = 'list/FETCH_ITEMS_ERROR'
const RESET_ITEMS = 'list/RESET_ITEMS'

const initialState = {
  pending: false,
  itens: [],
  error: null
}

export const fetchItens = (name, initial = []) => ({
  type: FETCH_ITEMS_PENDING,
  name,
  itens: initial
})

export const fetchItensSuccess = (name, itens) => ({
  type: FETCH_ITEMS_SUCCESS,
  name,
  itens
})

export const fetchItensError = (name, error) => ({
  type: FETCH_ITEMS_ERROR,
  name,
  error
})

export const resetItens = name => ({
  type: RESET_ITEMS,
  name
})

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_PENDING:
      return {
        ...state,
        pending: true,
        itens: action.itens
      }
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        pending: false,
        itens: action.itens
      }
    case FETCH_ITEMS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case RESET_ITEMS:
      return initialState
    default:
      return state
  }
}

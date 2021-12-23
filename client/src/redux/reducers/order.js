import { ORDER_REQUEST, ORDER_SUCCESS, ORDER_FAILURE } from '../types'

const initial = {
  orderLoading: false,
  orderDone: false,
  orderError: null
}

const orderReducer = (state = initial, action) => {
  switch (action.type) {
    case ORDER_REQUEST:
      return {
        ...state,
        orderLoading: true,
        orderDone: false,
        orderError: null
      }
    case ORDER_SUCCESS:
      return {
        ...state,
        orderLoading: false,
        orderDone: true
      }
    case ORDER_FAILURE:
      return {
        ...state,
        orderLoading: false,
        orderError: true
      }
    default:
      return state
  }
}

export default orderReducer

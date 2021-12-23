import {
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAILURE,
  ORDER_COMPLETED_REQUEST,
  ORDER_COMPLETED_SUCCESS,
  ORDER_COMPLETED_FAILURE
} from '../types'

const initial = {
  orderLoading: false,
  orderDone: false,
  orderError: null,
  orderCompletedLoading: false,
  orderCompletedDone: false,
  orderCompletedError: null
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
    case ORDER_COMPLETED_REQUEST:
      return {
        ...state,
        orderCompletedLoading: true,
        orderCompletedDone: false,
        orderCompletedError: null
      }
    case ORDER_COMPLETED_SUCCESS:
      return {
        ...state,
        orderCompletedLoading: false,
        orderCompletedDone: true
      }
    case ORDER_COMPLETED_FAILURE:
      return {
        ...state,
        orderCompletedLoading: false,
        orderCompletedError: true
      }
    default:
      return state
  }
}

export default orderReducer

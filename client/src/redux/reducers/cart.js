import {
  CART_SELECT_REQUEST,
  CART_SELECT_SUCCESS,
  CART_SELECT_FAILURE
} from '../types'

const initial = {
  cartSelectLoading: false,
  cartSelectDone: false,
  cartSelectError: null,
  carts: null
}

const cartReducer = (state = initial, action) => {
  switch (action.type) {
    case CART_SELECT_REQUEST:
      return {
        ...state,
        cartSelectLoading: true,
        cartSelectDone: false,
        cartSelectError: null
      }
    case CART_SELECT_SUCCESS:
      return {
        ...state,
        cartSelectLoading: false,
        cartSelectDone: true,
        carts: action.data.data.json
      }
    case CART_SELECT_FAILURE:
      return {
        ...state,
        cartSelectLoading: false,
        cartSelectError: true
      }
    default:
      return state
  }
}

export default cartReducer

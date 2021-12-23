import {
  CART_SELECT_REQUEST,
  CART_SELECT_SUCCESS,
  CART_SELECT_FAILURE,
  CART_ID_REQUEST,
  CART_ID_SUCCESS,
  CART_ID_FAILURE
} from '../types'

const initial = {
  cartSelectLoading: false,
  cartSelectDone: false,
  cartSelectError: null,
  cartIdLoading: false,
  cartIdDone: false,
  cartIdError: null,
  carts: null,
  cartId: null
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
    case CART_ID_REQUEST:
      return {
        ...state,
        cartIdLoading: true,
        cartIdDone: false,
        cartIdError: null
      }
    case CART_ID_SUCCESS:
      return {
        ...state,
        cartIdLoading: false,
        cartIdDone: true,
        cartId: action.data.data.json[0]
      }
    case CART_ID_FAILURE:
      return {
        ...state,
        cartIdLoading: false,
        cartIdError: true
      }
    default:
      return state
  }
}

export default cartReducer

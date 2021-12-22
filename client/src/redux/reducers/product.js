import {
  PRODUCT_SELECT_REQUEST,
  PRODUCT_SELECT_SUCCESS,
  PRODUCT_SELECT_FAILURE,
  PRODUCT_COUNT_REQUEST,
  PRODUCT_COUNT_SUCCESS,
  PRODUCT_COUNT_FAILURE
} from '../types'

const initial = {
  productSelectLoading: false,
  productSelectDone: false,
  productSelectError: null,
  productCountLoading: false,
  productCountDone: false,
  productCountError: null,
  products: null,
  totalCount: 0
}

const productReducer = (state = initial, action) => {
  switch (action.type) {
    case PRODUCT_SELECT_REQUEST:
      return {
        ...state,
        productSelectLoading: true,
        productSelectDone: false,
        productSelectError: null
      }
    case PRODUCT_SELECT_SUCCESS:
      return {
        ...state,
        productSelectLoading: false,
        productSelectDone: true,
        products: action.data
      }
    case PRODUCT_SELECT_FAILURE:
      return {
        ...state,
        productSelectLoading: false,
        productSelectError: true
      }
    case PRODUCT_COUNT_REQUEST:
      return {
        ...state,
        productCountLoading: true,
        productCountDone: false,
        productCountError: null
      }
    case PRODUCT_COUNT_SUCCESS:
      return {
        ...state,
        productCountLoading: false,
        productCountDone: true,
        totalCount: action.data
      }
    case PRODUCT_COUNT_FAILURE:
      return {
        ...state,
        productCountLoading: false,
        productCountError: true
      }
    default:
      return state
  }
}

export default productReducer

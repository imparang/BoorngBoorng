import {
  PRODUCT_SELECT_REQUEST,
  PRODUCT_SELECT_SUCCESS,
  PRODUCT_SELECT_FAILURE
} from '../types'

const initial = {
  productSelectLoading: false,
  productSelectDone: false,
  productSelectError: null
}

const productReducer = (state = initial, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default productReducer

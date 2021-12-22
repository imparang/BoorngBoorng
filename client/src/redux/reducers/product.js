import {
  PRODUCT_SEARCH_REQUEST,
  PRODUCT_SEARCH_SUCCESS,
  PRODUCT_SEARCH_FAILURE,
  PRODUCT_SELECT_REQUEST,
  PRODUCT_SELECT_SUCCESS,
  PRODUCT_SELECT_FAILURE,
  PRODUCT_COUNT_REQUEST,
  PRODUCT_COUNT_SUCCESS,
  PRODUCT_COUNT_FAILURE,
  PRODUCT_CATEGORY_REQUEST,
  PRODUCT_CATEGORY_SUCCESS,
  PRODUCT_CATEGORY_FAILURE
} from '../types'

const initial = {
  productSearchLoading: false,
  productSearchDone: false,
  productSearchError: null,
  productSelectLoading: false,
  productSelectDone: false,
  productSelectError: null,
  productCountLoading: false,
  productCountDone: false,
  productCountError: null,
  productCategoryLoading: false,
  productCategoryDone: false,
  productCategoryError: null,
  category1: null,
  category2: null,
  category3: null,
  category4: null,
  products: null,
  totalCount: 0
}

const productReducer = (state = initial, action) => {
  switch (action.type) {
    case PRODUCT_SEARCH_REQUEST:
      return {
        ...state,
        productSearchLoading: true,
        productSearchDone: false,
        productSearchError: null
      }
    case PRODUCT_SEARCH_SUCCESS:
      return {
        ...state,
        productSearchLoading: false,
        productSearchDone: true,
        products: action.data
      }
    case PRODUCT_SEARCH_FAILURE:
      return {
        ...state,
        productSearchLoading: false,
        productSearchError: true
      }
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
    case PRODUCT_CATEGORY_REQUEST:
      return {
        ...state,
        productCategoryLoading: true,
        productCategoryDone: false,
        productCategoryError: null
      }
    case PRODUCT_CATEGORY_SUCCESS:
      return {
        ...state,
        productCategoryLoading: false,
        productCategoryDone: true
      }
    case PRODUCT_CATEGORY_FAILURE:
      return {
        ...state,
        productCategoryLoading: false,
        productCategoryError: true
      }
    default:
      return state
  }
}

export default productReducer

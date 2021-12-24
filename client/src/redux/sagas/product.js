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
import { all, fork, call, put, takeLatest } from 'redux-saga/effects'
import getAxiosApi from '../../api/index'

// product selectList
function productSearchApi(data) {
  return getAxiosApi('/product?type=list', data)
}

function* productSearch(action) {
  try {
    const result = yield call(productSearchApi, action.data)
    yield put({
      type: PRODUCT_SEARCH_SUCCESS,
      data: result
    })
  } catch (error) {
    yield put({
      type: PRODUCT_SEARCH_FAILURE,
      data: error
    })
  }
}

function* watchProductSearch() {
  yield takeLatest(PRODUCT_SEARCH_REQUEST, productSearch)
}

// product selectPage
function productSelectApi(data) {
  return getAxiosApi('/product?type=page', data)
}

function* productSelect(action) {
  try {
    const result = yield call(productSelectApi, action.data)
    yield put({
      type: PRODUCT_SELECT_SUCCESS,
      data: result
    })
  } catch (error) {
    yield put({
      type: PRODUCT_SELECT_FAILURE,
      data: error
    })
  }
}

function* watchProductSelect() {
  yield takeLatest(PRODUCT_SELECT_REQUEST, productSelect)
}

// product selectCount
function productCountApi(data) {
  return getAxiosApi('/product?type=count', data)
}

function* productCount(action) {
  try {
    const result = yield call(productCountApi, action.data)
    yield put({
      type: PRODUCT_COUNT_SUCCESS,
      data: result
    })
  } catch (error) {
    yield put({
      type: PRODUCT_COUNT_FAILURE,
      data: error
    })
  }
}

function* watchProductCount() {
  yield takeLatest(PRODUCT_COUNT_REQUEST, productCount)
}

// product category
function productCategoryApi(data) {
  return getAxiosApi('/product?type=category', data)
}

function* productCategory(action) {
  try {
    const result = yield call(productCategoryApi, action.data)
    yield put({
      type: PRODUCT_CATEGORY_SUCCESS,
      data: result,
      category: action.category
    })
  } catch (error) {
    yield put({
      type: PRODUCT_CATEGORY_FAILURE,
      data: error
    })
  }
}

function* watchProductCategory() {
  yield takeLatest(PRODUCT_CATEGORY_REQUEST, productCategory)
}

export default function* productSaga() {
  yield all([
    fork(watchProductSearch),
    fork(watchProductSelect),
    fork(watchProductCount),
    fork(watchProductCategory)
  ])
}

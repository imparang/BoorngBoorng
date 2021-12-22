import {
  PRODUCT_SELECT_REQUEST,
  PRODUCT_SELECT_SUCCESS,
  PRODUCT_SELECT_FAILURE,
  PRODUCT_COUNT_SUCCESS,
  PRODUCT_COUNT_FAILURE,
  PRODUCT_COUNT_REQUEST
} from '../types'
import { all, fork, call, put, takeLatest } from 'redux-saga/effects'
import getAxiosApi from '../../api/index'

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

export default function* productSaga() {
  yield all([fork(watchProductSelect), fork(watchProductCount)])
}

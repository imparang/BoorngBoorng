import {
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAILURE,
  ORDER_COMPLETED_REQUEST,
  ORDER_COMPLETED_SUCCESS,
  ORDER_COMPLETED_FAILURE
} from '../types'
import { all, fork, call, put, takeLatest } from 'redux-saga/effects'
import getAxiosApi from '../../api'

// order order
function orderApi(data) {
  return getAxiosApi('/cart?type=order', data)
}

function* order(action) {
  try {
    const result = yield call(orderApi, action.data)
    yield put({
      type: ORDER_SUCCESS,
      data: result
    })
  } catch (error) {
    yield put({
      type: ORDER_FAILURE,
      data: error
    })
  }
}

function* watchOrder() {
  yield takeLatest(ORDER_REQUEST, order)
}

// order order complete
function orderCompleteApi(data) {
  return getAxiosApi('/cart?type=modify', data)
}

function* orderComplete(action) {
  try {
    const result = yield call(orderCompleteApi, action.data)
    yield put({
      type: ORDER_COMPLETED_SUCCESS,
      data: result
    })
  } catch (error) {
    yield put({
      type: ORDER_COMPLETED_FAILURE,
      data: error
    })
  }
}

function* watchOrderComplete() {
  yield takeLatest(ORDER_COMPLETED_REQUEST, orderComplete)
}

export default function* orderSaga() {
  yield all([fork(watchOrder), fork(watchOrderComplete)])
}

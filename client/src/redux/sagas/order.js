import { ORDER_REQUEST, ORDER_SUCCESS, ORDER_FAILURE } from '../types'
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

export default function* orderSaga() {
  yield all([fork(watchOrder)])
}

import {
  CART_SELECT_REQUEST,
  CART_SELECT_SUCCESS,
  CART_SELECT_FAILURE
} from '../types'
import { all, fork, call, put, takeLatest } from 'redux-saga/effects'
import getAxiosApi from '../../api'

function cartSelectApi(data) {
  return getAxiosApi('/cart?type=list', data)
}

function* cartSelect(action) {
  try {
    const result = yield call(cartSelectApi, action.data)
    yield put({
      type: CART_SELECT_SUCCESS,
      data: result
    })
  } catch (error) {
    yield put({
      type: CART_SELECT_FAILURE,
      data: error
    })
  }
}

function* watchCartSelect() {
  yield takeLatest(CART_SELECT_REQUEST, cartSelect)
}

export default function* cartSaga() {
  yield all([fork(watchCartSelect)])
}

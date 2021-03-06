import {
  CART_SELECT_REQUEST,
  CART_SELECT_SUCCESS,
  CART_SELECT_FAILURE,
  CART_ID_REQUEST,
  CART_ID_SUCCESS,
  CART_ID_FAILURE,
  CART_TOTALPRICE_REQUEST,
  CART_TOTALPRICE_SUCCESS,
  CART_TOTALPRICE_FAILURE,
  CART_SAVE_REQUEST,
  CART_SAVE_SUCCESS,
  CART_SAVE_FAILURE
} from '../types'
import { all, fork, call, put, takeLatest } from 'redux-saga/effects'
import getAxiosApi from '../../api'

// cart select list
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

// cart cart id
function cartIdApi(data) {
  return getAxiosApi('/cart?type=cart_id', data)
}

function* cartId(action) {
  try {
    const result = yield call(cartIdApi, action.data)
    yield put({
      type: CART_ID_SUCCESS,
      data: result
    })
  } catch (error) {
    yield put({
      type: CART_ID_FAILURE,
      data: error
    })
  }
}

function* watchCartId() {
  yield takeLatest(CART_ID_REQUEST, cartId)
}

// cart total price
function cartTotalPriceApi(data) {
  return getAxiosApi('/cart?type=totalPrice', data)
}

function* cartTotalPrice(action) {
  try {
    const result = yield call(cartTotalPriceApi, action.data)
    yield put({
      type: CART_TOTALPRICE_SUCCESS,
      data: result
    })
  } catch (error) {
    yield put({
      type: CART_TOTALPRICE_FAILURE,
      data: error
    })
  }
}

function* watchCartTotalPrice() {
  yield takeLatest(CART_TOTALPRICE_REQUEST, cartTotalPrice)
}

// cart save
function cartSaveApi(data) {
  return getAxiosApi('/cart?type=save', data)
}

function* cartSave(action) {
  try {
    const result = yield call(cartSaveApi, action.data)
    yield put({
      type: CART_SAVE_SUCCESS,
      data: result
    })
  } catch (error) {
    yield put({
      type: CART_SAVE_FAILURE,
      data: error
    })
  }
}

function* watchCartSave() {
  yield takeLatest(CART_SAVE_REQUEST, cartSave)
}

export default function* cartSaga() {
  yield all([
    fork(watchCartSelect),
    fork(watchCartId),
    fork(watchCartTotalPrice),
    fork(watchCartSave)
  ])
}

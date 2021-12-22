import {
  PRODUCT_SELECT_REQUEST,
  PRODUCT_SELECT_SUCCESS,
  PRODUCT_SELECT_FAILURE
} from '../types'
import { all, fork, call, put, takeLatest } from 'react-redux'
import getAxiosApi from '../../api/index'

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

const productSaga = () => {
  all([fork(watchProductSelect)])
}

export default productSaga

import { all, fork } from 'redux-saga/effects'
import userSaga from './user'
import productSaga from './product'

export default function* rootSaga() {
  yield all([fork(userSaga), fork(productSaga)])
}

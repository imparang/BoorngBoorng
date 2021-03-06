import { all, fork } from 'redux-saga/effects'
import userSaga from './user'
import productSaga from './product'
import boardSaga from './board'
import cartSaga from './cart'
import orderSaga from './order'

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(productSaga),
    fork(boardSaga),
    fork(cartSaga),
    fork(orderSaga)
  ])
}

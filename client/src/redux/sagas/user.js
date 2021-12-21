import { all, fork, call, put, takeLatest } from 'redux-saga/effects'
import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE
} from '../types'

import getAxiosApi from '../../api'

function signUpApi(data) {
  return getAxiosApi('/user?type=signup', data)
}

function* signUp(action) {
  try {
    const result = yield call(signUpApi, action.data)
    yield put({
      type: USER_SIGNUP_SUCCESS,
      data: result
    })
  } catch (error) {
    yield put({
      type: USER_SIGNUP_FAILURE,
      data: error
    })
  }
}

function* watchSignUp() {
  yield takeLatest(USER_SIGNUP_REQUEST, signUp)
}

export default function* userSaga() {
  yield all([fork(watchSignUp)])
}

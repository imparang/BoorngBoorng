import { all, fork, call, put, takeLatest } from 'redux-saga/effects'
import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  EMAIL_CHECK_REQUEST,
  EMAIL_CHECK_FAILURE,
  EMAIL_CHECK_SUCCESS
} from '../types'

import getAxiosApi from '../../api'

// email duplicate
function emailCheckApi(data) {
  return getAxiosApi('/user?type=dplicheck', data)
}

function* emailCheck(action) {
  try {
    const result = yield call(emailCheckApi, action.data)
    yield put({
      type: EMAIL_CHECK_SUCCESS,
      data: result
    })
  } catch (error) {
    yield put({
      type: EMAIL_CHECK_FAILURE,
      data: error
    })
  }
}

function* watchEmailCheck() {
  yield takeLatest(EMAIL_CHECK_REQUEST, emailCheck)
}

// signup
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
  yield all([fork(watchSignUp), fork(watchEmailCheck)])
}

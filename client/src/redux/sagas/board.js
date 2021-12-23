import {
  BOARD_SEARCH_REQUEST,
  BOARD_SEARCH_SUCCESS,
  BOARD_SEARCH_FAILURE,
  BOARD_SELECT_REQUEST,
  BOARD_SELECT_SUCCESS,
  BOARD_SELECT_FAILURE,
  BOARD_ADD_REQUEST,
  BOARD_ADD_SUCCESS,
  BOARD_ADD_FAILURE
} from '../types'
import { all, fork, put, call, takeLatest } from 'redux-saga/effects'
import getAxiosApi from '../../api'

// board select list
function boardSearchApi(data) {
  return getAxiosApi('/Board?type=list', data)
}

function* boardSearch(action) {
  try {
    const result = yield call(boardSearchApi, action.data)
    yield put({
      type: BOARD_SEARCH_SUCCESS,
      data: result
    })
  } catch (error) {
    yield put({
      type: BOARD_SEARCH_FAILURE,
      data: error
    })
  }
}

function* watchBoardSearch() {
  yield takeLatest(BOARD_SEARCH_REQUEST, boardSearch)
}

// board select page
function boardSelectApi(data) {
  return getAxiosApi('/Board?type=page', data)
}

function* boardSelect(action) {
  try {
    const result = yield call(boardSelectApi, action.data)
    yield put({
      type: BOARD_SELECT_SUCCESS,
      data: result
    })
  } catch (error) {
    yield put({
      type: BOARD_SELECT_FAILURE,
      data: error
    })
  }
}

function* watchBoardSelect() {
  yield takeLatest(BOARD_SELECT_REQUEST, boardSelect)
}

// board insert
function boardAddApi(data) {
  return getAxiosApi('/Board?type=save', data)
}

function* boardAdd(action) {
  try {
    const result = yield call(boardAddApi, action.data)
    yield put({
      type: BOARD_ADD_SUCCESS,
      data: result
    })
  } catch (error) {
    yield put({
      type: BOARD_ADD_FAILURE,
      data: error
    })
  }
}

function* watchBoardAdd() {
  yield takeLatest(BOARD_ADD_REQUEST, boardAdd)
}

export default function* boardSaga() {
  yield all([
    fork(watchBoardSearch),
    fork(watchBoardSelect),
    fork(watchBoardAdd)
  ])
}

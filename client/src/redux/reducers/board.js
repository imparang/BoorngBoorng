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

const initial = {
  boardSearchLoading: false,
  boardSearchDone: false,
  boardSearchError: null,
  boardSelectLoading: false,
  boardSelectDone: false,
  boardSelectError: null,
  boardAddLoading: false,
  boardAddDone: false,
  boardAddError: null,
  posts: null
}

const boardReducer = (state = initial, action) => {
  switch (action.type) {
    case BOARD_SEARCH_REQUEST:
      return {
        ...state,
        boardSearchLoading: true,
        boardSearchDone: false,
        boardSearchError: null
      }
    case BOARD_SEARCH_SUCCESS:
      return {
        ...state,
        boardSearchLoading: false,
        boardSearchDone: true,
        posts: action.data.data.json
      }
    case BOARD_SEARCH_FAILURE:
      return {
        ...state,
        boardSearchLoading: false,
        boardSearchError: true
      }
    case BOARD_SELECT_REQUEST:
      return {
        ...state,
        boardSelectLoading: true,
        boardSelectDone: false,
        boardSelectError: null
      }
    case BOARD_SELECT_SUCCESS:
      return {
        ...state,
        boardSelectLoading: false,
        boardSelectDone: true,
        posts: action.data.data.json
      }
    case BOARD_SELECT_FAILURE:
      return {
        ...state,
        boardSelectLoading: false,
        boardSelectError: true
      }
    case BOARD_ADD_REQUEST:
      return {
        ...state,
        boardAddLoading: true,
        boardAddDone: false,
        boardAddError: null
      }
    case BOARD_ADD_SUCCESS:
      return {
        ...state,
        boardAddLoading: false,
        boardAddDone: true
      }
    case BOARD_ADD_FAILURE:
      return {
        ...state,
        boardAddLoading: false,
        boardAddError: true
      }
    default:
      return state
  }
}

export default boardReducer

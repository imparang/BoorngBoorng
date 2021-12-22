import {
  BOARD_SEARCH_REQUEST,
  BOARD_SEARCH_SUCCESS,
  BOARD_SEARCH_FAILURE
} from '../types'

const initial = {
  boardSearchLoading: false,
  boardSearchDone: false,
  boardSearchError: null,
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
        posts: action.data
      }
    case BOARD_SEARCH_FAILURE:
      return {
        ...state,
        boardSearchLoading: false,
        boardSearchError: true
      }
    default:
      return state
  }
}

export default boardReducer

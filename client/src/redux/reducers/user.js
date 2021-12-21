import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE
} from '../types'

const initial = {
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  me: null
}

const userReducer = (state = initial, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return {
        ...state,
        signUpLoading: true,
        signUpDone: false,
        signUpError: null
      }
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpDone: true,
        me: {
          ...state.User,
          data: action.data
        }
      }
    case USER_SIGNUP_FAILURE:
      return {
        ...state,
        signUpLoading: false,
        signUpError: true,
        me: {
          ...state.User,
          data: action.data
        }
      }
    default:
      return state
  }
}

export default userReducer

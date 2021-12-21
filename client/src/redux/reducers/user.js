import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  EMAIL_CHECK_REQUEST,
  EMAIL_CHECK_SUCCESS,
  EMAIL_CHECK_FAILURE
} from '../types'

const initial = {
  emailCheckLoading: false,
  emailCheckDone: false,
  emailCheckError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  me: null
}

const userReducer = (state = initial, action) => {
  switch (action.type) {
    case EMAIL_CHECK_REQUEST:
      return {
        ...state,
        emailCheckLoading: true,
        emailCheckDone: false,
        emailCheckError: null
      }
    case EMAIL_CHECK_SUCCESS:
      return {
        ...state,
        emailCheckLoading: false,
        emailCheckDone: true
      }
    case EMAIL_CHECK_FAILURE:
      return {
        ...state,
        emailCheckLoading: false,
        emailCheckError: true
      }
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

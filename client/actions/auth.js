import { getUserTokenInfo, isAuthenticated, removeUser } from '../utils/auth'
import { login, register } from '../apis/auth'

export function requestLogin() {
  return {
    type: 'LOGIN_REQUEST',
    isFetching: true,
    isAuthenticated: false
  }
}

export function receiveLogin(user) {
  return {
    type: 'LOGIN_SUCCESS',
    isFetching: false,
    isAuthenticated: true,
    user
  }
}

export function loginError(message) {
  return {
    type: 'LOGIN_FAILURE',
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function loginUser(creds, confirmSuccess) {
  return dispatch => {
    dispatch(requestLogin(creds))
    return login(creds)
      .then(userInfo => {
        dispatch(receiveLogin(userInfo))
        confirmSuccess()
      })
      .catch(err => {
        dispatch(loginError(err))
      })
  }
}

function requestLogout() {
  return {
    type: 'LOGOUT_REQUEST',
    isFetching: true,
    isAuthenticated: true
  }
}

function receiveLogout() {
  return {
    type: 'LOGOUT_SUCCESS',
    isFetching: false,
    isAuthenticated: false
  }
}

export function logoutUser(confirmSuccess) {
  return dispatch => {
    dispatch(requestLogout())
    removeUser()
    dispatch(receiveLogout())
    confirmSuccess()
  }
}

export function registerUserRequest(creds, confirmSuccess) {
  console.log("registerUserRequest==========================")
  return (dispatch) => {
    register(creds)
      .then(userInfo => {
        console.log(userInfo)
        dispatch(receiveLogin(userInfo))
        confirmSuccess()
      })
      .catch(err => dispatch(loginError(err)))
  }
}

export function checkAuth(confirmSuccess) {
  return dispatch => {
    if (isAuthenticated()) {
      dispatch(receiveLogin(getUserTokenInfo()))
      confirmSuccess()
    }
  }
}

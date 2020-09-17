import { combineReducers } from 'redux'

import auth from './auth'
import page from './page'
import meeting from './meeting'

export default combineReducers({
  auth,
  page,
  meeting
})

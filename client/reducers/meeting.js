import { INIT_MEETING } from '../actions/meeting'

const initialState = {
  meeting: {}
}

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    
    case INIT_MEETING:
      return action.meetingDetails

      default: 
      return state 
  }
}

export default reducer
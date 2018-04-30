import axios from 'axios'


//action types
const CREATE_DECISION = 'CREATE_DECISION'


//action creators
const createDecision = (decision) => {
  return {
    type: CREATE_DECISION,
    decision
  }
}


//thunks
export const postDecision = (body) => {
  return (dispatch) => {
    axios.post('/api/decisions', body)
      .then(res => res.data)
      .then(created => {
        dispatch(createDecision(created))
      })
      .catch(err => console.error(err))
  }
}


//reducer
export default function(state = [], action) {
  switch (action.type) {
    case CREATE_DECISION:
      return action.decision
    default:
      return state
  }
}

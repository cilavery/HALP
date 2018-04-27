import axios from 'axios'


//action types
const CREATE_DECISION = 'CREATE_DECISION'

//action creators
const createDecision = (decision) => {
  type: CREATE_DECISION,
  decision
}

//thunks
export const postDecision = (body) => {
  return function (dispatch) {
    axios.post('/api/decisions', body)
      .then(res => res.data)
      .then(decision => {
        dispatch(createDecision(decision))
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

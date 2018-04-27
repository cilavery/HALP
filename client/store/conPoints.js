import axios from 'axios'

//action type
const CREATE_CON_POINT = 'CREATE_CON_POINT'

//action creator
const createConPoint = (conPoint) => {
  return {
    type: CREATE_CON_POINT,
    conPoint
  }
}


//reducer  need to add to the points state
export default function (state = [], action) {
  switch (action.type) {
    case CREATE_CON_POINT:
      return [...state, action.conPoint]
    default:
      return state
  }
}

//thunks
export const postPointCon = (body) => {
  return (dispatch) => {
    axios.post('/api/decisions/points', body)
      .then(res => res.data)
      .then(created => {
        dispatch(createConPoint(created))
      })
      .catch(err => console.error(err))
  }
}



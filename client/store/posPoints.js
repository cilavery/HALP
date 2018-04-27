import axios from 'axios'

//action type
const CREATE_POS_POINT = 'CREATE_POS_POINT'

//action creator
const createPosPoint = (posPoint) => {
  return {
    type: CREATE_POS_POINT,
    posPoint
  }
}


//reducer  need to add to the points state
export default function (state = [], action) {
  switch (action.type) {
    case CREATE_POS_POINT:
      return [...state, action.posPoint]
    default:
      return state
  }
}

//thunks
export const postPointPos = (body) => {
  return (dispatch) => {
    axios.post('/api/decisions/points', body)
      .then(res => res.data)
      .then(created => {
        dispatch(createPosPoint(created))
      })
      .catch(err => console.error(err))
  }
}



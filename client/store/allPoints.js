import axios from 'axios'

//action types
const GET_ALL_POINTS = 'GET_ALL_POINTS'

//action creator
const getAllPoints = points => {
  return {
    type: GET_ALL_POINTS,
    points
  }
}


//reducer
export default function (state = [], action) {
  switch (action.type) {
    case GET_ALL_POINTS:
      return action.points
    default:
      return state
  }
}


//thunks
export const fetchPoints = () => {
  return (dispatch) => {
    axios.get('/api/decisions/points')
      .then(res => res.data)
      .then(created => {
        dispatch(getAllPoints(created))
      })
      .catch(err => console.error(err))
  }
}

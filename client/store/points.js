import axios from 'axios'

//action type
const CREATE_POS_POINT = 'CREATE_POS_POINT'
const CREATE_CON_POINT = 'CREATE_CON_POINT'

//action creator
const createPosPoint = (point) => {
  return {
    type: CREATE_POS_POINT,
    posPoint: point
  }
}

const createConPoint = (point) => {
  return {
    type: CREATE_CON_POINT,
    conPoint: point
  }
}

//reducer  need to add to the points state
export default function (state = [], action) {
  switch (action.type) {
    case CREATE_POS_POINT:
      return [...state.action, action.posPoint]
    case CREATE_CON_POINT:
      return [...state.action, action,conPoint]
    default:
      return state
  }
}

//thunks
export const postPointPos = (body) => {
  return (dispatch) => {
    axios.post('/api/points', body)
      .then(res => res.data)
      .then(created => {
        dispatch(createPosPoint(created))
      })
      .catch(err => console.error(err))
  }
}

export const postPointCon = (body) => {
  return (dispatch) => {
    axios.post('/api/points', body)
      .then(res => res.data)
      .then(created => {
        dispatch(createConPoint(created))
      })
      .catch(err => console.error(err))
  }
}

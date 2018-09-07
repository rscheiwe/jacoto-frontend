
const defaultState ={
  courses: []
}

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'PASS_COURSES':
      return {...state, courses: action.payload }
    case 'SEARCHED_COURSES':
      return {...state, courses: action.payload }
    default:
      return state
    }
}

export default rootReducer

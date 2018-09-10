
const defaultState ={
  courses: [],
  course: null,
  user: {
    id: null,
    username: null,
    user_courses: []
  },
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null
}

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'PASS_COURSES':
      return {...state, courses: action.payload }
    case 'SEARCHED_COURSES':
      return {...state, courses: action.payload }
    case 'PASS_COURSE':
      return {...state, course: action.payload}
    case 'SET_CURRENT_USER':

      return {...state, user: action.payload, loggedIn: true}
    case 'AUTHENTICATING_USER':
      return {...state, authenticatingUser: !state.authenticatingUser}

    default:
      return state
    }
}

export default rootReducer

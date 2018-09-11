
const defaultState ={
  courses: [],
  course: null,
  user: {
    id: null,
    username: null,
    courses: []
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
    case 'LOGOUT_USER':
      return {...state, loggedIn: false}
    case 'ADD_COURSE_TO_USER':
    // console.log(action)
      return {...state,
        user:{
          ...state.user,
          courses: [...state.user.courses, action.payload]
        }
      }
    case 'REMOVE_COURSE_FROM_USER':
    console.log(action.payload)
      return {...state,
        user: {
          ...state.user,
          courses: state.user.courses.filter( course => course.id !== action.payload )
        }
      }
    default:
      return state
    }
}

export default rootReducer

export const passCourses = (data) => {
  return { type: 'PASS_COURSES', payload: data }
}

export const searchedCourses = (data) => {
  return { type: 'SEARCHED_COURSES', payload: data}
}

export const passCourse = (data) => {
  return { type: 'PASS_COURSE', payload: data}
}

export const fetchCurrentUser = () => {
  // takes the token in localStorage and finds out who it belongs to
  return dispatch => {
    dispatch(authenticatingUser())
    fetch('http://localhost:3000/api/v1/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(({ user }) => {
        // console.log(user)
        dispatch(setCurrentUser(user))
        dispatch(authenticatingUser())
      })
  }
}

export const setCurrentUser = userData => ({
  type: 'SET_CURRENT_USER',
  payload: userData
})

export const loginUser = (username, pass) => {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({ user: {
        username: username,
        password: pass
      }
      })
    }).then(response => response.json())
      .then(({ user, jwt }) => {
      dispatch(setCurrentUser(user))
      localStorage.setItem('token', jwt)
    })
  }
}

export const logoutUser = () => {
  return { type: 'LOGOUT_USER' }
}

export const addCourseToUser = (course) => {
  return { type: 'ADD_COURSE_TO_USER', payload: course }
}

export const removeCourseFromUser = (courseid) => {
  return { type: 'REMOVE_COURSE_FROM_USER', payload: courseid }
}

export const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' })

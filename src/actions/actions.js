export const passCourses = (data) => {
  return { type: 'PASS_COURSES', payload: data }
}

export const searchedCourses = (data) => {
  return { type: 'SEARCHED_COURSES', payload: data}
}

export const passCourse = (data) => {
  return { type: 'PASS_COURSE', payload: data}
}

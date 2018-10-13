// import { passCourses } from './actions/actions'


const Adapter =  {

  getCourses: function() {
      return fetch("http://jacoto-api.herokuapp.com/api/v1/courses", {
        method: "GET"
      }).then(res => res.json())
  },

  searchCourses: function(searchTerm) {
    return fetch("http://jacoto-api.herokuapp.com/api/v1/queries", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        searchTerm: searchTerm
        })
      }).then(res => res.json())
    },

    readCourse: function(id) {
      return fetch(`http://jacoto-api.herokuapp.com/api/v1/courses/${id}`, {
        method: "GET"
      }).then(res => res.json())
    },

    topicCourses: function(topic) {

      return fetch("http://jacoto-api.herokuapp.com/api/v1/queries", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json'
        },
        body: JSON.stringify({
          topic: topic
        })
      }).then(res => res.json())
    },

    addCourse: function(user_id, course_id) {
      return fetch("http://jacoto-api.herokuapp.com/api/v1/user_courses", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json'
        },
        body: JSON.stringify({
          user_id: user_id,
          course_id: course_id
        })
      }).then(res => res.json())
    }
}

export default Adapter

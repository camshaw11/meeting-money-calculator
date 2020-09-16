import request from 'superagent'

const apiUrl = '/api/v1'

//gets meeting deets by id
export function APIgetMeetingById(id) {
  return request.get(apiUrl + "/meetings/" + id)
    .then(res => {
      return res.body
    })
    .catch(err => console.log(err))
}
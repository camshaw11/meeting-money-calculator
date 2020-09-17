import request from 'superagent'

import { getEncodedToken } from 'authenticare/client'

const jsonHeader = { 'Accept': 'application/json' }
const authHeader = { 'Authorization': `Bearer ${getEncodedToken()}` }

const apiUrl = '/api/v1'

//gets meeting deets by id
export function APIgetMeetingDetails(id) {
  return request.get(apiUrl + "/meetings/" + id)
    .set(jsonHeader)
    .set(authHeader)
    .then(res => {
      return res.body
    })
    .catch(err => console.log(err))
}

// Get Graph Details
export function getGraphDetails(limit){
  return request.get(apiUrl + '/graph' + (limit ? '/' + limit : ''))
    .set(jsonHeader)
    .set(authHeader)
    .then(res => res.body)
    .catch(err => console.error(err.message))
}
const express = require('express')
const { applyAuthRoutes, getTokenDecoder } = require('authenticare/server')
const db = require('../db/meetings')

const { userExists, getUserByUsername, createUser } = require('../db/users')

const router = express.Router()

applyAuthRoutes(router, {
  userExists,
  getUserByName: getUserByUsername,
  createUser
})

router.get('/meetings', getTokenDecoder(), getUsersMeetingHistory)
router.post('/meetings', getTokenDecoder(), saveCompletedMeeting)
router.get('/meetings/:id/users', getTokenDecoder(), getMeetingAttendees)
router.get('/users', getTokenDecoder(), getAppUsers)

router.use(userError)

function getUsersMeetingHistory (req, res){
  db.getMeetingHistory(req.user.id)
    .then(meetings=>{
      res.json(meetings)
    })
}
function saveCompletedMeeting (req, res){
  const meeting = req.body.meeting
  const attendees = req.body.attendees
  meeting.attendees = attendees.length
  console.log(meeting, attendees)
  
}

function saveMeetingAttendees (req,res){

}
function getMeetingAttendees (req, res){
  console.log('getMeetingAttendees')
}
function getAppUsers (req, res){
  console.log('getAppUsers')
}

function userError (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ ok: false, message: 'Access denied.' })
  }
  res.status(500).json({ok: false, message: 'Something went wrong, please contact your administrator.'})
}


module.exports = router

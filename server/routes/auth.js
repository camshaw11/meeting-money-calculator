// Include Required components
const express = require('express')
const { applyAuthRoutes, getTokenDecoder } = require('authenticare/server')

// Include required functions for accessing Database
const { userExists, getUserByUsername, createUser } = require('../db/users')
const db = require('../db/meetings')

// Define Router
const router = express.Router()

// Create Routes for User Exists, get User, and create User
// Creates POST /auth/register and POST /auth/signin routes
applyAuthRoutes(router, {
  userExists,
  getUserByName: getUserByUsername,
  createUser
})

// Define meeting routes, enforce authentication and provide function if user authenticated
//  METHOD | ROUTE              | Validate User     | Perform Function (next())
router.get('/meetings', getTokenDecoder(), getUsersMeetingHistory)
router.post('/meetings', getTokenDecoder(), saveCreatedMeeting)
router.patch('/meetings/:id', getTokenDecoder(), updateCompletedMeeting)
router.get('/meetings/:id', getTokenDecoder(), getMeetingDetails)
router.get('/meetings/:id/users', getTokenDecoder(), getMeetingAttendees)
router.get('/users', getTokenDecoder(), getAppUsers)
router.get('/graph', getTokenDecoder(), getGraphData)
router.get('/graph/:limit', getTokenDecoder(), getReducedGraphData)

// Define global error handler if any of the routes encounter a problem
router.use(handleError)

// Get Logged in users meeting history
// Calls database function to get specified users meeting history
// Returns Array of meeting objects in date order
function getUsersMeetingHistory (req, res) {
  db.getMeetingHistory(req.user.id)
    .then(meetings => {
      res.json(meetings)
    })
    .catch(handleError)
}

// Save created meeting saves provided data to the database
// Accepts a Meeting Object and an Array of Attendee ID's
// Parses Posted data
// Calls DB function to save Data
//  > Returns Meeting ID
// Map through attendee IDs creating log of attendance in attendance table
// Once complete calls DB function to get created meetings details, and
// attendee Details and returns a detailed meeting Object with
// an Array containing Attending Details embedded
function saveCreatedMeeting (req, res) {
  const meeting = req.body.meeting
  const attendees = req.body.attendees
  meeting.attendees = attendees.length

  db.saveMeeting(meeting).then(([meeting_id]) => {
    attendees.map(attendee_id => {
      return db
        .saveAttendance(meeting_id, attendee_id)
        .then(result => result)
        .catch(handleError)
    })
    db.getMeetingDetails(meeting_id)
      .then(meeting => {
        db.getAttendeeInfo(meeting_id)
          .then(attendees => {
            meeting.attendee_details = attendees
            res.json(meeting)
          })
          .catch(handleError)
      })
      .catch(handleError)
  })
}

// Update completed meeting saves provided data to the database
// Accepts a Meeting Object and a meetingID provided in URL
// Parses Posted data
// Calls DB function to update Data
// Once complete calls DB function to get created meetings details, and
// attendee Details and returns a detailed meeting Object with
// an Array containing Attending Details embedded
function updateCompletedMeeting (req, res) {
  const meeting_id = req.params.id
  const meeting = req.body.meeting

  db.updateMeeting(meeting_id, meeting)
    .then(() => {
      db.getMeetingDetails(meeting_id)
        .then(meeting => {
          db.getAttendeeInfo(meeting_id)
            .then(attendees => {
              meeting.attendee_details = attendees
              res.json(meeting)
            })
            .catch(handleError)
        })
        .catch(handleError)
    })
    .catch(handleError)
}

// Calls DB function to get Meeting Details
// Returns a detailed meeting Object with
// an Array containing Attending Details embedded
function getMeetingDetails (req, res) {
  db.getMeetingDetails(req.params.id)
    .then(meeting => {
      db.getAttendeeInfo(req.params.id)
        .then(attendees => {
          meeting.attendee_details = attendees
          res.json(meeting)
        })
        .catch(handleError)
    })
    .catch(handleError)
}

// Calls DB function to get All Attendees from the provided meeting ID
// Returns Array of Attendee Objects
function getMeetingAttendees (req, res) {
  db.getAttendeeInfo(req.params.id)
    .then(attendees => {
      res.json(attendees)
    })
    .catch(handleError)
}

// Calls DB function to get a list of all app users
// Returns array of user objects
function getAppUsers (req, res) {
  db.getAllUsers()
    .then(users => {
      res.json(users)
    })
    .catch(handleError)
}

// Calls DB function to retrieve a list of all meetings with date and cost data
function getGraphData (req, res) {
  db.getGraphData()
    .then(data => {
      res.json(data)
    })
    .catch(handleError)
}

// Calls DB function to retrieve a list of logged in users meetings with date and cost data
function getReducedGraphData (req, res) {
  db.getUserGraphData(req.user.id)
    .then(data => {
      res.json(data)
    })
    .catch(handleError)
}

// Global Error Handler,
// Validates if the error is due to user providing an incorrect token
// or no token at all thus "Unauthorized"
// Else assumes something went wrong on the server end.
// Returns appropriate status alongside Object with Generic Message
function handleError (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ message: 'Access denied.' })
  } else if (res) {
    res.status(500).json({
      message: 'Something went wrong, please contact your administrator.'
    })
  } else {
    console.error(err)
  }
}

// Export all Router Functions to Server
module.exports = router

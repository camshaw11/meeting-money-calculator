const { insert } = require('./connection')
// Define DB Functions for Handling Meetings

// Require Database configuration
const connection = require('./connection')

// Export DB Functions for use by Routes
module.exports = {
  getMeetingHistory,
  saveMeeting,
  saveAttendance,
  getAttendeeInfo,
  getAllUsers,
  getMeetingDetails,
  getGraphData,
  getUserGraphData,
  updateMeeting
}

// Accepts Integer(UserId)
// Search Attendee Table for all meetings that have the provided userId
// as an attendee. Return details on applicable meetings in Ascending Date Order
// returns MeetingObject 
// {
//    Integer(meeting_id), 
//    String(meeting_name), 
//    Integer(attendees), 
//    Decimal(cost), 
//    DateTime(created_at)
//  }
function getMeetingHistory (userId, db = connection) {
  return db('attendees')
    .where('attendees.user_id', userId)
    .join('meetings', 'attendees.meeting_id', 'meetings.id')
    .orderBy('meetings.created_at', 'asc')
    .select('attendees.meeting_id')
    .select('meetings.meeting_name')
    .select('meetings.attendees')
    .select('meetings.cost')
    .select('meetings.created_at')
}

// Accepts formatted meeting Object { String(meeting_name), Integer(duration), Integer(attendees), Decimal(cost) }
// Inserts provided meeting into database, returns inserted records ID
function saveMeeting (meeting, db = connection) {
  return db('meetings').insert(meeting)
}

// Accepts Integer(meetingId), Object(meeting) with details to be updated
// Updates the meeting with the provided details with the provided meeting id
function updateMeeting(meetingId, meeting, db=connection){
  return db('meetings')
    .where('id', meetingId)
    .update(meeting)
}

// Accepts two variables Integer(meetingId) and Integer(attendeeId)
// Inserts attendance record into attendees table
function saveAttendance (meetingId, attendeeId, db = connection) {
  return db('attendees').insert({ meeting_id: meetingId, user_id: attendeeId })
}

// Accepts Integer(meetingId)
// Search attendee table for meetingID
// Joins onto users table to get attendee user details
// Returns Array of User Objects
// [
//  {
//    Integer(user_id), 
//    String(username), 
//    String(first_name),
//    String(last_name), 
//    Decimal(hourly_wage)
//  },
//  ...
// ]
function getAttendeeInfo (meetingId, db = connection) {
  return db('attendees')
    .where('attendees.meeting_id', meetingId)
    .join('users', 'attendees.user_id', 'users.id')
    .select('attendees.user_id')
    .select('users.username')
    .select('users.first_name')
    .select('users.last_name')
    .select('users.hourly_wage')
}

// Searches Users table and returns Array of User Objects for all users in first name alphabetical order
// {
//    Integer(user_id),
//    String(username),
//    String(first_name),
//    String(last_name),
//    Decimal(hourly_wage)
// }
function getAllUsers (db = connection) {
  return db('users')
    .orderBy('first_name', 'asc')
    .select('id as user_id')
    .select('username')
    .select('first_name')
    .select('last_name')
    .select('hourly_wage')
}

// Accepts Integer(meeting_id)
// Searched meetings table and returns Meeting Object containing meeting details
// {
//    Integer(meeting_id),
//    String(meeting_name).
//    Integer(duration),
//    Integer(attendees),
//    Decimal(cost)
//    DateTime(created_at)
// }
function getMeetingDetails (meeting_id, db = connection) {
  return db('meetings')
    .where('id', meeting_id)
    .first('id as meeting_id')
    .first('meeting_name')
    .first('duration')
    .first('attendees')
    .first('cost')
    .first('created_at')
}

// Queries DB to return all meetings in date order
// Returns array of objects
// [{ DateTime(created_at), Decimal(cost) }]
function getGraphData(db=connection){
  return db('meetings')
    .orderBy('created_at', 'asc')
    .select('created_at')
    .select('cost')
}

// Accepts User ID
// Queries DB to return all meetings in date order
// Returns array of objects
// [{ DateTime(created_at), Decimal(cost) }]
function getUserGraphData(userId, db=connection){
  return db('attendees')
    .where('user_id', userId)
    .join('meetings', 'attendees.meeting_id', 'meetings.id')
    .orderBy('meetings.created_at', 'asc')
    .select('meetings.created_at')
    .select('meetings.cost')
}

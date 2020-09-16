const { insert } = require('./connection')
const connection = require('./connection')

module.exports = {
  getMeetingHistory,
  saveMeeting,
  saveAttendance
}

function getMeetingHistory (userId, db = connection) {
  return db('attendees')
    .where('attendees.user_id', userId)
    .join('meetings', 'attendees.meeting_id', 'meetings.id')
    .orderBy('meetings.created_at', 'asc')
    .select()
}

function saveMeeting(meeting, db = connection){
  return db('meeting')
    .insert(meeting)
}

function saveAttendance(meetingId, attendeeId, db = connection){
  return db('attendees')
    .insert({meeting_id: meetingId, user_id: attendeeId})
}

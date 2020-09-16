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
    .select('attendees.meeting_id')
    .select('meetings.meeting_name')
    .select('meetings.attendees')
    .select('meetings.cost')
    .select('meetings.created_at')
}

function saveMeeting(meeting, db = connection){
  return db('meetings')
    .insert(meeting)
}

function saveAttendance(meetingId, attendeeId, db = connection){
  return db('attendees')
    .insert({meeting_id: meetingId, user_id: attendeeId})
}

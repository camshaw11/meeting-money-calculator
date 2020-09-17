export const INIT_MEETING = 'INIT_MEETING'

export function initMeeting (meetingDetails) {
  console.log('action:', meetingDetails)
  return {
    type: INIT_MEETING,
    meetingDetails
  }
}
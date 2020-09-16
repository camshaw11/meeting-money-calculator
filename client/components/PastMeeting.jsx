import React from "react"
import { connect } from "react-redux"

import { APIgetMeetingById } from '../apis/index.js'

function PastMeeting(props) {

  // gets meeting deets by id
  // let meetingDetails = APIgetMeetingById(this.props.id)

  // test what it looks like
  // console.log(meetingDetails)
  
  return (
    <div className="container">
      <h2 className="title is-3">Meeting Details</h2>
      <h4 className="title is-3">Name: </h4>
      <h4 className="title is-4">[date]</h4>
      <h4 className="title is-3">Cost: </h4>
      <h4 className="title is-3">Duration: </h4>
      <h4 className="title is-4">Attendees: </h4>
      {/* get meeting name */}
      {/* get meeting date */}
      {/* //get meeting cost and duration */}
      {/* get list of users in this particular meeting via meeting ID */}

    </div>
  )
}

export default connect()(PastMeeting)
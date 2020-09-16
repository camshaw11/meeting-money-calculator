import React from "react"
import { connect } from "react-redux"

import { APIgetMeetingDetails } from '../apis/index.js'

class PastMeeting extends React.Component {
  state = {
    details: '',
  }

  componentDidMount() {
    APIgetMeetingDetails(this.props.id).then(deets => {
      this.setState({ details: deets })
    })
  }

  render() {
    return (
      <div className="container">
        <h2 className="title is-2">Meeting Details</h2>
        <h4 className="title is-3">{this.state.details.meeting_name}</h4>
        <h4 className="title is-4">{this.state.details.created_at}</h4>
        <h4 className="title is-4">Cost: ${this.state.details.cost}</h4>
        <h4 className="title is-4">Duration: {this.state.details.duration}</h4>
        <h4 className="title is-4">Attendees: </h4>
        <ul>
          {this.state.details.attendee_details &&
            this.state.details.attendee_details.map((attendee, idx) =>
              <li key={idx}>{attendee.first_name} {attendee.last_name} (${attendee.hourly_wage} p/hr)</li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default connect()(PastMeeting)
import React from "react"
import { connect } from "react-redux"

import { APIgetMeetingDetails } from '../apis/index.js'
import { togglePage } from '../actions/auth.js'

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
      <>
        <h2 className="title is-2">Meeting Details</h2>
        <div className="card">


          <header className="card-header">
            <h4 className="card-header-title">{this.state.details.meeting_name}</h4>
          </header>
          <div className="card-content">
            <div className="content">
              <time dateTime="">Date: {this.state.details.created_at}</time>
              <p>Cost: ${this.state.details.cost}</p>
              {/* <h4 className="title">Cost: ${this.state.details.cost}</h4> */}
              <p className="">Duration: {this.state.details.duration}</p>
              <p className="">Attendees: </p>
              <ul>
                {this.state.details.attendee_details &&
                  this.state.details.attendee_details.map((attendee, idx) =>
                    <li key={idx}>{attendee.first_name} {attendee.last_name} (${attendee.hourly_wage} p/hr)</li>
                  )
                }
              </ul>
            </div>

          </div>
          <footer className="card-footer">
            <button className="button" onClick={() => this.props.dispatch(togglePage("list", 1))}>List</button>
          </footer>
        </div>
      </>
    )
  }
}

export default connect()(PastMeeting)
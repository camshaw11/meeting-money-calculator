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
            <time className="card-header-title level-right" dateTime="">Date: {this.state.details.created_at}</time>
          </header>
          <div className="card-content">
            <div className="content">
              <p>Cost: ${this.state.details.cost}</p>
              <p className="">Duration: {this.state.details.duration} hours</p>
              <button className="button" onClick={() => this.props.dispatch(togglePage("list", 1))}>Hide</button>
            </div>

          </div>
          <footer className="card-footer">
            {this.state.details.attendee_details &&
              this.state.details.attendee_details.map((attendee, idx) =>
                <p className="card-footer-item" key={idx}>{attendee.first_name} {attendee.last_name} (${attendee.hourly_wage} p/hr)</p>
              )
            }
          </footer>
        </div>
      </>
    )
  }
}

export default connect()(PastMeeting)
import React from "react"
import { connect } from "react-redux"

import PastMeeting from "./PastMeeting"

import { APIgetPastMeetings } from '../apis/index.js'


class History extends React.Component {
  state = {
    page: "list",
    currentMeetingId: 0,
  }

  togglePage = (id) => {
    this.state.page === "list"
      ? this.setState({ currentMeetingId: id, page: "details" })
      : this.setState({ currentMeetingId: id, page: "list" })
  }

  componentDidMount() {
    APIgetPastMeetings(this.props.id).then(deets => {
      this.setState({ details: deets })
    })
  }

  render() {
    return (
      this.state.page === "list"
        ?
        <div className="container">
          <h2 className="title is-2">Meeting history</h2>
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">Chicken and Chat</p>
              <a href="#" className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </header>
            <div className="card-content">
              <div className="content">
                {/* meeting.id taken from a map */}
                <button onClick={this.togglePage(meeting.id)}>Deetz</button>
                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
        :
        <PastMeeting id={this.state.currentMeetingId} />
    )
  }
}

export default connect()(History)

// this needs to go on the index page ->
{
  /* <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script> */
}

import React from "react"
import { connect } from "react-redux"

import PastMeeting from "./PastMeeting"

import { APIgetPastMeetings } from '../apis/index.js'


class History extends React.Component {
  state = {
    details: '',
  }

  componentDidMount() {
    APIgetPastMeetings().then(deets => {
      this.setState({ details: deets })

    })

  }

  render() {
    let meeting = ''
    if (this.state.details.length > 0) {
      meeting = this.state.details
    }

    return (
      <>
        <div className="container" >
          <h2 className="title is-2">Meeting history</h2>

          {meeting && meeting.map((info, i) => {
            return (
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title">{info.meeting_name}</p>
                  <a href="#" className="card-header-icon" aria-label="more options">
                    <span className="icon">
                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </a>
                </header>
                <div className="card-content">
                  <div className="content">
                    <PastMeeting id={1} />
                    Details{"\n"}
                    <time dateTime="2016-1-1">{info.created_at}</time>
                  </div>
                </div>
              </div>
            )
          })}


        </div >
      </>
    )
  }
}

export default connect()(History)

// this needs to go on the index page ->
{
  /* <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script> */
}

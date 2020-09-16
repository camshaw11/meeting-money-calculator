import React from "react"
import { connect } from "react-redux"

import PastMeeting from "./PastMeeting"

import { APIgetPastMeetings } from '../apis/index.js'


class History extends React.Component {
  state = {
<<<<<<< HEAD
    details: {},
  }

  componentDidMount() {
    APIgetPastMeetings(this.props.id).then(deets => {
      this.setState({ details: deets })
    })
=======
    page: ""
>>>>>>> e057fc39a50ae8f13ea528732b615e11cba004e9
  }

  render() {
    return (
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
              <PastMeeting id={1} />
              Details{"\n"}
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(History)

// this needs to go on the index page ->
{
  /* <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script> */
}

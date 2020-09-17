import React from "react";
import { connect } from "react-redux";

import { APIgetMeetingDetails } from "../apis/index.js";
import { togglePage } from "../actions/auth.js";

class PastMeeting extends React.Component {
  state = {
    details: [],
  };

  componentDidMount() {
    APIgetMeetingDetails(this.props.id).then((deets) => {
      this.setState({ details: deets });
    });
  }

  /* <<<<<----- date conversion function for when seconds get passed through, will implement on friday----->>>>>
    new Date(this.state.details.duration * 1000).toISOString().substr(11, 8)
  */

  render() {
    return (
      <>
        <h2 className="title is-2">Meeting Details</h2>
        <div className="card">
          <header className="card-header">
            <h4 className="card-header-title">
              {this.state.details.meeting_name}
            </h4>
            {this.state.details.created_at && (
              <time className="card-header-title level-right" dateTime="">
                Date:{" "}
                {new Date(this.state.details.created_at).toLocaleString("default", {
                  dateStyle: "short",
                  timeStyle: "short",
                  hourCycle: "h12",
                })}
              </time>
            )}
          </header>
          <div className="card-content">
            <div className="columns is-vcentered">
              <div className="column">
                <h4 className="is-size-5">Cost: ${this.state.details.cost}</h4>
              </div>
              <div className="column">
                <h4 className="is-size-5">
                  Duration: {this.state.details.duration} hours
                </h4>
              </div>
              <div className="column">
                <button
                  className="button is-primary is-light"
                  onClick={() => this.props.dispatch(togglePage("list", 1))}
                >
                  Hide
                </button>
              </div>
            </div>
          </div>
          <footer className="card-footer">
            {this.state.details.attendee_details &&
              this.state.details.attendee_details.map((attendee, idx) => (
                <p className="card-footer-item" key={idx}>
                  {attendee.first_name} {attendee.last_name} ($
                  {attendee.hourly_wage} p/hr)
                </p>
              ))}
          </footer>
        </div>
      </>
    );
  }
}

export default connect()(PastMeeting);

import React from "react";
import { connect } from "react-redux";

import moment from "moment";
moment().format();

import { APIgetMeetingDetails } from "../apis/index.js";
import { togglePage } from "../actions/auth.js";

class PastMeeting extends React.Component {
  state = {
    details: [],
  };

  componentDidMount() {
    APIgetMeetingDetails(this.props.id).then((deets) => {
      deets.cost = deets.cost.toFixed(2);
      this.setState({ details: deets });
    });
  }

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
                {new Date(this.state.details.created_at).toLocaleString(
                  "default",
                  {
                    dateStyle: "short",
                    timeStyle: "short",
                    hourCycle: "h12",
                  }
                )}
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
                  Duration:{" "}
                  {this.state.details.duration &&
                    durationCalculator(this.state.details.duration)}
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

          <div className="card-footer">
            {this.state.details.notes && (
              <div className="card-footer-item">
                <div className="card-item">
                  <p className="subtitle is-5">Meeting Notes</p>
                  <p>{this.state.details.notes}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

function durationCalculator(durationInMs) {
  const duration = moment.duration(durationInMs, "milliseconds");
  return moment.utc(duration.as("milliseconds")).format("HH:mm:ss");
}

export default connect()(PastMeeting);

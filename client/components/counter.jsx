import React from "react";
import { connect } from "react-redux";
import { APIgetMeetingDetails } from "../apis/index";

class Counter extends React.Component {
  state = {
    cost: 0,
    details: [],
    startTime: 0,
    count: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
    MSperhour: 3600000,
    MSpermin: 60000,
    MSpersec: 1000,
    hourlyRate: 0,
  };

  componentDidMount() {
    this.startTimer();

    APIgetMeetingDetails(1).then((details) => {
      const startTime = new Date(details.created_at).getTime();
      this.setState(
        {
          details: details,
          startTime,
        },
        this.calcHourlyRate
      );
    });
  }

  startTimer = () => {
    setInterval(() => {
      const count = new Date().getTime() - this.state.startTime;
      this.setState({
        count,
      });

      const hours = Math.floor(this.state.count / this.state.MSperhour);
      const minutes = Math.floor(
        (this.state.count - hours * this.state.MSperhour) / this.state.MSpermin
      );
      const seconds = Math.floor(
        (this.state.count -
          hours * this.state.MSperhour -
          minutes * this.state.MSpermin) /
          this.state.MSpersec
      );

      this.setState({ seconds, minutes, hours });
      this.hourlyCost();
    }, 1000);
  };

  hourlyCost = () => {
    if (this.state.details.cost) {
      const cost =
        (this.state.count / this.state.MSperhour) * this.state.hourlyRate;
      this.setState({
        cost,
      });
    }
  };

  calcHourlyRate = () => {
    let hourlyRate = 0;
    this.state.details.attendee_details.map((attendee) => {
      console.log(attendee);
      hourlyRate += attendee.hourly_wage;
    });
    this.setState({
      hourlyRate,
    });
  };

  render() {
    return (
      <>
        <div className="card">
          <div className="card-conent">
            <section className="section">
              <div className="container">
                <h1 className="title has-text-centered">Time elapsed:</h1>
                <h1 className="subtitle">
                  {this.state.hours}:
                  {this.state.minutes.toString().length < 2 && 0}
                  {this.state.minutes}:
                  {this.state.seconds.toString().length < 2 && 0}
                  {this.state.seconds}
                </h1>
                <h1 className="subtitle">Total Cost of meeting:</h1>
                <h2 className="title">${this.state.cost.toFixed(2)}</h2>
                <button className="button is-danger is-outlined my-3">
                  End Meeting
                </button>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default Counter;

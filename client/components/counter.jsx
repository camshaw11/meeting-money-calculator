import React from "react";
import { connect } from "react-redux";
import { APIgetMeetingDetails } from "../apis/index";

class Counter extends React.Component {
  state = {
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
      console.log(cost);
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
      <p>
        {this.state.hours}: {this.state.minutes}: {this.state.seconds}
      </p>
    );
  }
}

export default Counter;

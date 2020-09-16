import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  state = { count: 7521, seconds: 0, minutes: 0, hours: 0 };

  startTimer = () => {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });

      const hours = Math.floor(this.state.count / 3600);
      const minutes = Math.floor((this.state.count - hours * 3600) / 60);
      const seconds = Math.floor(
        this.state.count - hours * 3600 - minutes * 60
      );

      this.setState({ seconds, minutes, hours });
    }, 1000);
  };
  componentDidMount() {
    this.startTimer();
  }

  render() {
    return (
      <p>
        {this.state.hours}: {this.state.minutes}: {this.state.seconds}
      </p>
    );
  }
}

export default Counter;

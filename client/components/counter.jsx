import React from "react";

class Counter extends React.Component {
  counter = (props) => {
    const { startCount } = this.props;
    this.setState({
      count: startCount,
    });
    setInterval(this.setState(count + 1), 1000);
  };
}

export default Counter;

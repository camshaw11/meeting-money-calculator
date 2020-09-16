import React, { useState } from "react";
import { connect } from "react-redux";
import Counter from "./counter";

state = {
  count: 0,
};

function Meeting(props) {
  return (
    <div className="container">
      <h2 className="title is-2">Start Meeting</h2>

      <h2>the current count is: {count}</h2>
      <button onClick={Counter}>Click me</button>
    </div>
  );
}

// componentDidMount () {
//   const {startCount} = this.props
//   this.setState({
//     count: startCount
//   })
//   this.doIntervalChange()
// }

// doIntervalChange = () => {
//     this.myInterval = setInterval(() => {
//     this.setState(prevState => ({
//       count: prevState.count - 1
//     }))
//   }, 1000)
// }

export default connect()(Meeting);

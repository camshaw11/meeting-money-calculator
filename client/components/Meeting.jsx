import React, { useState } from "react";
import { connect } from "react-redux";
import Counter from "./counter";

class Meeting extends React.Component {
  redirectPage = () => {
    this.props.history.push("/history");
  };

  render() {
    return (
      <div className="container">
        <h2 className="title is-2">Start Meeting</h2>

        {/* <h2>the current count is: {count}</h2>
      <button onClick={Counter}>Click me</button> */}

        <Counter redirect={this.redirectPage} id={this.props.match.params.id} />
      </div>
    );
  }
}

export default connect()(Meeting);

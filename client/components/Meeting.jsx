import React, { useState } from "react";
import { connect } from "react-redux";
import Counter from "./counter";

function Meeting(props) {
  return (
    <div className="container">
      <h2 className="title is-2">Start Meeting</h2>

      {/* <h2>the current count is: {count}</h2>
      <button onClick={Counter}>Click me</button> */}

      <Counter />
    </div>
  );
}

export default connect()(Meeting);

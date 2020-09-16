import React, { useState } from "react";
import { connect } from "react-redux";

function Meeting(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h2 className="title is-2">Start Meeting</h2>

      <h2>the current count is: {count}</h2>
      <button onClick={counter()}>Click me</button>
    </div>
  );
}

const counter = (props) => {
  const { startCount } = this.props;
  this.setState({
    count: startCount,
  });
  setInterval(this.setState(count + 1), 1000);
};

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

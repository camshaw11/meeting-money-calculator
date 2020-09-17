import React from "react";
import { connect } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend, ResponsiveContainer
} from "recharts";

import { getGraphDetails } from "../apis";

class Graph extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const limit = (this.props.limit ? true : false)
    getGraphDetails(limit)
      .then(data => {
        const formatted = data.map(entry => {
          entry.page = new Date(entry.created_at).toLocaleString('default', {
              month: "numeric",
              year: "numeric"
          })
          entry.date = new Date(entry.created_at).toLocaleString('default', {
            day: 'numeric',
            month: "numeric",
            year: "numeric"
        })
          delete entry.created_at
          return entry
        })
        this.setState({ data: formatted });
      })
  }

  CustomTooltip =({ payload, label, active }) => {
    
    if (active && payload[0].payload) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`Date: ${payload[0].payload.date}`}</p>
          <p className="desc">{`Meeting Cost: $${payload[0].value}`}</p> 
        </div>
      );
    }
  
    return null;
  }

  render() {
    return (
      <>
      {this.state.data.length > 0 &&
        <div className="graph">
          <ResponsiveContainer height={300} width='100%'>
          <LineChart
            className="detailGraph"
            data={this.state.data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey='date' domain={[0, 'dataMax']}/>
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip content={this.CustomTooltip} />
            <Line
              type="monotone"
              dataKey="cost"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
          </ResponsiveContainer>
        </div>
      }
      {!this.state.data.length > 0 &&
        <h1>No meetings yet... The companies money is safe.</h1>
      }
      </>
    );
  }
}

function mapStateToProps(globalState) {
  return {};
}

export default connect(mapStateToProps)(Graph);

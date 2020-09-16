import React from "react"
import { connect } from "react-redux"

function History(props) {
  return (
    <div className="container">
      <h2 className="title is-2">Meeting history</h2>
      <table className="table">
        <thead>
          <tr>
            <th>
              <abbr title="Meeting">Meeting</abbr>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default connect()(History)

import React from "react"
import { connect } from "react-redux"

import PastMeeting from './PastMeeting'

function History(props) {
  return (
    <div className="container">
      <h2 className="title is-2">Meeting history</h2>

      <PastMeeting id={1} />

    </div>
  )
}

export default connect()(History)

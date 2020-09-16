import React from "react"
import { connect } from "react-redux"
// import "bulma/css/bulma.css"
function History(props) {
  return (
    <div className="container">
      <h2 className="title is-2">Meeting history</h2>
      {/* <div className="meeting-card card">
        <h3 className="date">Date: 2020-09-16</h3>
        <h3 className="meeting-name">Meeting Name: Project Updates</h3>
        <h3 className="details">
          <a>Details</a>
        </h3>
      </div> */}

      <div class="card">
        <header class="card-header">
          <p class="card-header-title">Chicken and Chat</p>
          <a href="#" class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <p>Details{"\n"}</p>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect()(History)

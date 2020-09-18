import React from 'react'
import { connect } from 'react-redux'
import { loginUser, loginError } from '../actions/auth'
import { initMeeting } from '../actions/meeting'
import { APIgetUsers, APIpostMeeting } from '../apis/'
import AddMember from './AddMember'

class Form extends React.Component {
  state = {
    meetingName: '',
    attendees: [],
    users: [{ first_name: '', last_name: '' }]
  }

  componentDidMount() {
    APIgetUsers()
      .then(users => {
        this.setState({
          users: users
        })
      })
  }

  handleChange = (e) => {
    this.setState({
      meetingName: e.target.value,
    })
  }

  handleCheckbox = (e) => {
    this.setState({
      attendees: [...this.state.attendees, e.target.value]
    })
  }


  handleSubmit = (e) => {
    e.preventDefault()
    let postData = {
      meeting: {
        meeting_name: this.state.meetingName
      },
      attendees: this.state.attendees
    }
    APIpostMeeting(postData)
      .then(meetingDetails => {
        this.props.dispatch(initMeeting(meetingDetails))
        this.props.history.push('/meeting/' + meetingDetails.meeting_id)
      })
  }

  render() {
    const { auth } = this.props
    return (
      <form className="form box" onSubmit={this.handleSubmit}>
        <h1 className="title is-2">Create A Meeting</h1>
        <hr />
        {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}
        <label className="label is-large has-text-centered">
          Meeting Name
        </label>
        <input required className="input has-text-centered is-large is-fullwidth"
          placeholder="Meeting Name" type="text" name={this.state.meetingName} autoComplete="yes"
          value={this.state.meetingName} onChange={this.handleChange}
        />

        <div className="field">
          <div className="control">
            <label className="label is-large has-text-centered">Attendees</label>
            {this.state.users.map(user => {
              return (
                <label className="checkbox" key={`attendeeCheckbox ${user.user_id}`}>
                  <input type="checkbox" value={user.user_id} name="attendees" onChange={this.handleCheckbox} />
                  <span className="checkbox-span p-3">{user.first_name} {user.last_name}</span>
                </label>
              )
            }
            )}
          </div>
        </div>

        <AddMember />

        <input className="button is-large is-fullwidth is-success" value='Submit' type="submit" />
      </form>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Form)
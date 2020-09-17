import React from 'react'
import {connect} from 'react-redux'
import {loginUser, loginError} from '../actions/auth'
// import { initUsers } from '../actions/users'
import { APIgetUsers, APIpostMeeting } from '../apis/'

class Form extends React.Component {
  state = {
    meeting: {
      meetingName: '',
      attendees: []
    },
    users: [{first_name: '', last_name: ''}]
  }

  componentDidMount(){
    APIgetUsers()
      .then(users=>{
      //   (this.props.dispatch(initUsers(user)))
        this.setState({
             users: users
           })
          console.log(this.state.users)
        }
        )
      }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let {username, password} = this.state
    // const confirmSuccess = () => { this.props.history.push('/') }
    // this.props.dispatch(loginUser({username, password}, confirmSuccess))
  }
  
  render() {
    const {auth} = this.props
    return (
      <form className="form box" onSubmit={this.handleSubmit}>
        <h1 className="title is-2">Create A Meeting</h1>
        <hr />
        {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}
        <label className="label is-large has-text-centered">Meeting Name</label>
          <input required className="input has-text-centered is-large is-fullwidth" placeholder="Meeting Name" type="text" name="meetingName" autoComplete="yes" value={this.state.meeting.meetingName} onChange={this.handleChange}/>
        <div className="field">
          <div className="control">
            <label className="label is-large has-text-centered">Attendees</label>
            { this.state.users.map(user => { 
              return (
                <label className="checkbox" key={`attendeeCheckbox ${user.user_id}`}>
                  <input type="checkbox" value={user.user_id} name="attendees"/>
                    {user.first_name} {user.last_name} 
                </label> 
              )
              }
            )}
            
          </div>  
        </div>  
    
        <input className="button is-large is-fullwidth is-success" value='Login' type="submit" />
      </form>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Form)
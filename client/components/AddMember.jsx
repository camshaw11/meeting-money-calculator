import React from 'react'
import { connect } from 'react-redux'
import { loginError, registerUserRequest } from '../actions/auth'

class AddMember extends React.Component {
  state = {
    username: '',
    first_name: '',
    last_name: '',
    password: '',
    confirm_password: '',
    hourly_wage: 0
  }

  componentDidMount() {
    this.props.dispatch(loginError(''))
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    let { username, password, confirm_password, first_name, last_name, hourly_wage } = this.state
    if (confirm_password != password) return this.props.dispatch(loginError("Passwords don't match"))
    const confirmSuccess = () => { this.props.history.push('/') }
    //redirect to meetings component page /meeting
    this.props.dispatch(registerUserRequest({ username, password, first_name, last_name, hourly_wage }, confirmSuccess))
  }

  render() {
    const { auth } = this.props
    return (
      <form className="Register form box" onSubmit={this.handleSubmit}>

        <hr />
        <label className="label is-large has-text-centered">
          Add Member
        </label>

        {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}
        <label className="column is-6 is-offset-one-quarter label is-large has-text-centered">Username
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="User Name" type="text" name="username" autoComplete="username" onChange={this.handleChange} value={this.state.username} />
        </label>
        <div className="columns">
          <label className="column is-6 label is-large has-text-centered">First Name
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="First Name" type="text" name="first_name" onChange={this.handleChange} value={this.state.first_name} />
          </label>
          <label className="column is-6 label is-large has-text-centered">Last Name
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Last Name" type="text" name="last_name" onChange={this.handleChange} value={this.state.last_name} />
          </label>
        </div>
        <br />
        <div className="columns">
          <label className="column is-6 label is-large has-text-centered">Password
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Password" type="password" name="password" autoComplete="new-password" onChange={this.handleChange} value={this.state.password} />
          </label>
          <label className="column is-6 label is-large has-text-centered">Confirm Password
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Confirm Password" type="password" name="confirm_password" autoComplete="new-password" onChange={this.handleChange} value={this.state.confirm_password} />
          </label>
        </div>

        <label className="column is-6 is-offset-one-quarter label is-large has-text-centered">Hourly Wage
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="Hourly Wage" name="hourly_wage" autoComplete="hourly_wage" onChange={this.handleChange} value={this.state.hourly_wage} />
        </label>

        <input className="button is-success is-large is-fullwidth" value="Add Member" type="submit" />
      </form>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(AddMember)

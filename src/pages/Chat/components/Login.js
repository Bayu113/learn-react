import React, { Component } from 'react';
import axios from 'axios';
import './form.css';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      errorMessage: '',
    }
  }


  setUsername = e => {
    this.setState({
      username: e.target.value
    })
  }

  setPassword = e => {
    this.setState({
      password: e.target.value
    })
  }
  onLoginRequest = () => {
    axios.post('http://167.99.66.103/api/users/login', {
      username: this.state.username,
      password: this.state.password,
    }).then(res => {
      if (res.data.success === false) {
        this.setState({errorMessage: res.data.message})
      } else {
        this.props.setAppState('active')
        this.props.setUsername(this.state.username)
      }
    })
  }



  render() {
    return (
      <div className="form-wrapper">
        <label htmlFor="usernameID">Username</label>
        <input id="usernameID" type="text" value={this.state.username} onChange={this.setUsername} />
        <label htmlFor="passwordID">Password</label>
        <input id="passwordID" type="password" value={this.state.password} onChange={this.setPassword} />
        <button className="submit-button" onClick={this.onLoginRequest}>Login Now</button>

        <div className="error-msg">{this.state.errorMessage}</div>
      </div>
    )
  }
}


export default Login

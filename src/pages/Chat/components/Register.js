import React, { Component } from 'react'
import axios from 'axios'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      displayName: '',
      profilePicUrl: '',
      password: '',
      errorMessage: '',
    }
  }

  setUsernameChange= e => {
    this.setState({
      username: e.target.value
    })
  }
  
  setDisplayChange= e => {
    this.setState({
      displayName: e.target.value
    })
  }

  
  setprofilePicUrlChange= e => {
    this.setState({
      profilePicUrl: e.target.value
    })
  }

  
  setPasswordChange= e => {
    this.setState({
      password: e.target.value
    })
  }

  onRegisterNow = () => {
    axios.post('http://167.99.66.103/api/users', {
      username: this.state.username,
      displayName: this.state.displayName,
      profilePicUrl: this.state.profilePicUrl,
      password: this.state.password,
    }).then(res=> {
        this.setState({errorMessage: res.data.message})
    })
  }

  render() {
    return (
      <div className="form-wrapper">
        <label htmlFor="usernameID" >Username</label>
        <input id="usernameID" type="text" value={this.state.Username} onChange={this.setUsernameChange} />
        <label htmlFor="displayID">Display Name</label>
        <input id="displayID" type="text" value={this.state.Display} onChange={this.setDisplayChange}/>
        <label htmlFor="profileID">Profil Picture URL</label>
        <input id="profileID" type="text" value={this.state.profilePicUrl} onChange={this.setprofilePicUrlChange}/>
        <label htmlFor="passwordID">Password</label>
        <input id="passwordID" type="password" value={this.state.Password} onChange={this.setPasswordChange}/>
        <button className="submit-button" onClick={this.onRegisterNow}>Register Now</button>
        <div className="error-msg">{this.state.errorMessage}</div>
      </div>
    )
  }
}

export default Register

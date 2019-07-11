import React, { Component, Fragment } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Chatroom from './components/Chatroom'
import './style.css'

class Chat extends Component {
  constructor() {
    super()
    this.state = {
      // state ada 3, login - register - active
      appState: 'login',
      loggedInUsername: '',
    }
  }

  changeAppState = state => {
    this.setState({
      appState: state,
    })
  }

  setloggedInUser = username => {
    this.setState({ loggedInUsername: username })
  }
  render() {
    return (
      <div className="chat-container">
        <div className="buttons-wrapper">

          {this.state.appState !== 'active' && (
            <Fragment>
              <button
                className={this.state.appState === 'login' ? 'active' : ''}
                onClick={() => this.changeAppState('login')}
              >
                Login
              </button>

              <button
                className={this.state.appState === 'register' ? 'active' : ''}
                onClick={() => this.changeAppState('register')}
              >
                Register
            </button>
            </Fragment>
          )}


          {this.state.appState === 'active' && <button onClick={() => {
            this.changeAppState('login');
            this.setloggedInUser('');
          }}>Logout</button>
          }
        </div>
        {this.state.appState === 'login' && <Login
          setAppState={this.changeAppState}
          setUsername={this.setloggedInUser}
        />}
        {this.state.appState === 'register' && <Register />}
        {this.state.appState === 'active' && <Chatroom loggedInUsername={this.state.loggedInUsername} />}
      </div>
    )
  }
}

export default Chat

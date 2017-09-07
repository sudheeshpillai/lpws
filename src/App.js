import React, { Component } from 'react';

import Login from './Login'
import Home from './Home'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      loggedIn: false,
      rememberMe: true,
      username: '',
      password: '',
      invalidCredentials: false
    }
  }

  onLogin = (e) => {
    e.preventDefault();
    this.setState({ invalidCredentials: false });
    const { username, password } = this.state;
    if (username === 'studiouser' && password === 'password-1') {
      this.setState({ loggedIn: true });
    }
    else {
      this.setState({ invalidCredentials: true });
    }
  }

  onRememberMe = (e) => {
    this.setState({
      rememberMe: e.target.checked
    });
  }

  onInputChange = (field, value) => {
    this.setState({ [field]: value });
  }

  render() {
    const { loggedIn, username } = this.state;
    return (
      <div className="main-container">
        {
          loggedIn
            ? <Home username={username} />
            : <Login
              {...this.state}
              rememberMe={this.state.rememberMe}
              onLogin={this.onLogin}
              onRememberMe={this.onRememberMe}
              onInputChange={this.onInputChange}
            />
        }
      </div>
    );
  }
}

export default App;

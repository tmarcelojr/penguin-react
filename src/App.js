import React, { Component } from 'react';
import PenguinContainer from './PenguinContainer'
import LoginRegisterForm from './LoginRegisterForm'
import './App.css';

export default class App extends Component {
  state = {
    loggedIn: false,
    loggedInUsername: null
  }

  register = async (registerInfo) => {
    // console.log('We are in register with', registerInfo);
    try{
      const registerRes = await fetch(process.env.REACT_APP_API_URL + '/api/v1/penguins/register', {
        credentials: 'include', // Required for cookies
        method: 'POST',
        body: JSON.stringify(registerInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const registerJson = await registerRes.json()
      console.log('this is our register json', registerJson);
    } catch(err) {
      console.log(err);
    }
  }

  login = async (loginInfo) => {
    console.log('we are in login with this info', loginInfo);
    try{
      const loginRes = await fetch(process.env.REACT_APP_API_URL + '/api/v1/penguins/login', {
          credentials: 'include',
          method: 'POST',
          body: JSON.stringify(loginInfo),
          headers: {
            'Content-Type': 'application/json'
        }
      })
      const loginJson = await loginRes.json()
      if(loginRes.status === 200) {
        this.setState({
          loggedIn: true,
          loggedInUsername: loginJson.data.username // helpful for good UI
        })
      }
      console.log(this.state.loggedIn);
      console.log(this.state.loggedInUsername);
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Penguin React</h1>
        check current user: {this.state.loggedIn + ' ' + this.state.loggedInUsername}
        <PenguinContainer />
        <LoginRegisterForm 
          login={this.login}
          register={this.register}
        />
      </div>
    );
  }
}
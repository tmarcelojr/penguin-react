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
    console.log('We are in register with', registerInfo);

  }

  login = () => {
    console.log('we are in login');
  }

  render() {
    return (
      <div className="App">
        <h1>Penguin React</h1>
        <PenguinContainer />
        <LoginRegisterForm 
          login={this.login}
          register={this.register}
        />
      </div>
    );
  }
}
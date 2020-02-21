import React, { Component } from 'react';
import PenguinContainer from './PenguinContainer'
import activityPenguinLogo from './activityPenguinLogo.jpg'
import './App.css';

export default class App extends Component {
  state = {

  }

  render() {
    return (
      <div className="App">
        <img className="website-logo" src={activityPenguinLogo} alt="website-logo"/>
        <PenguinContainer 
          loggedIn={this.state.loggedIn}
        />
        Welcome to Activity Penguin! Click Login to return or register!
      </div>
    );
  }
}
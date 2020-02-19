import React, { Component } from 'react';
import PenguinContainer from './PenguinContainer'
import './App.css';

export default class App extends Component {
  state = {
  }

  render() {
    return (
      <div className="App">
        <h1>Penguin React</h1>
        check current user: {this.state.loggedIn + ' ' + this.state.loggedInUsername}
        <PenguinContainer />
      </div>
    );
  }
}
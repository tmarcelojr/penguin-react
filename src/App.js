import React, { Component } from 'react';
import PenguinContainer from './PenguinContainer'
import './App.css';

export default class App extends Component {
  state = {
  }

  render() {
    return (
      <div className="App">
        <h1>Baby Penguin Activities Tracker</h1>
        <PenguinContainer />
      </div>
    );
  }
}
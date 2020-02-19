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
        <PenguinContainer />
      </div>
    );
  }
}
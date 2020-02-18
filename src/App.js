import React from 'react';
import PenguinContainer from './PenguinContainer'
import LoginRegisterForm from './LoginRegisterForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Penguin React</h1>
      <PenguinContainer />
      <LoginRegisterForm />
    </div>
  );
}

export default App;

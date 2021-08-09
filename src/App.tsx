import React from 'react';
import logo from './logo.svg';
import './App.scss';
import SighnIn from './pages/sighnIn/SighnIn';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <SighnIn />
    </div>
  );
}

export default App;

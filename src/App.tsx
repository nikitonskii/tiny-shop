import React from 'react';
import logo from './logo.svg';
import './App.scss';
import SignIn from './pages/signIn/SignIn';

function App() {
  return (
    <div className='App'>
      <img src={logo} className='App-logo' alt='logo' />
      <SignIn />
    </div>
  );
}

export default App;

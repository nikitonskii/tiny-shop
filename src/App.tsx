import React from 'react';
import logo from './logo.svg';
import './App.scss';
import SignIn from './pages/signIn/SignIn';

const App: React.FC = (): JSX.Element => {
  return (
    <div className='App'>
      <img src={logo} className='App-logo' alt='logo' />
      <SignIn />
    </div>
  );
}

export default App;

import React, { Fragment } from 'react';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar'
import Login from './components/auth/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Fragment>
      <Navbar />
      <Landing />
      <Login />
      </Fragment>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListUsers from './ListUsers';
import Login from './Login';
import Clock from './Clock';

class Header extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
        <h2> Yo</h2>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return(
      <div>
      <div className="App-clock App">
        <Header/>
        <Clock/>
      </div>
      <div className="App-body">
        <Login/>
        <ListUsers/>
      </div>
      </div>
  )}
}

export default App;

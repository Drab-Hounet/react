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

class Wrapper extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
    }
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
  }

  onLoginSuccess(stateLog) {
    console.log(stateLog);
    this.setState({
      showModal: true,
    });
    if(stateLog==='ok'){

    }
  }

  render() {
    return (
      <div>
        <Login onLoginSuccess={this.onLoginSuccess}/>
        <ListUsers showModal={this.state.showModal}/>
      </div>
    )
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
        <Wrapper />
      </div>
      </div>
  )}
}

export default App;

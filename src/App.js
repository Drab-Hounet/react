import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Form, Col, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';
import './App.css';


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

class Clock extends Component{
  constructor(props){
      super(props);
      this.state = {date : new Date()};
  }

  render(){
    return (
      <div>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tictac()
      ,1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tictac(){
    this.setState({
      date : new Date()
    });
  }

}

class FormLogin extends Component{

  constructor(props) {
    super(props);
    this.state = {login: '',
                  password: ''};

    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log(this.state.login);
    console.log(this.state.password);

  }

  handleChangeLogin(event){
    this.setState({login:event.target.value});
  }

  handleChangePass(event){
    this.setState({password:event.target.value});
  }

  render(){
    return(
    <Form horizontal onSubmit={this.handleSubmit}>
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={9}>
          <FormControl type="text" placeholder="Email" value={this.state.login} onChange={this.handleChangeLogin} />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} sm={2}>
          Password
        </Col>
        <Col sm={9}>
          <FormControl type="password" placeholder="Password" value={this.state.password} onChange={this.handleChangePass}/>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit">
            Sign in
          </Button>
        </Col>
      </FormGroup>
    </Form>
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
        <FormLogin/>
      </div>
      </div>
  )}
}

export default App;

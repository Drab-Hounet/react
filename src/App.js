import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Form, Col, FormControl, FormGroup, Label, ControlLabel,Table} from 'react-bootstrap';
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
                  password: '',
                  loginOK: ''};

    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    fetch('http://carbillet.net/api-digitalGrenoble/credentials/', {
      method: 'POST',
      headers: {
         Accept: 'application/json',
         'Content-type': "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: JSON.stringify({json :{
		          username : this.state.login,
              password : this.state.password
            }})
    }).then((response) => response.json())
      .then((response) => {
        this.setState({
          loginOK: response
        });
        console.log(this.state.loginOK.statePwdApi);
      })
  }

  // .then((response) => response.json())

  handleChangeLogin(event){
    this.setState({login:event.target.value});

  }

  handleChangePass(event){
    this.setState({password:event.target.value});
  }

  render(){
    return(
    <Form horizontal>
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
        <Col smOffset={2} sm={2}>
          <Button type="button" onClick={this.handleSubmit} value="submit">
            Sign in
          </Button>
        </Col>
        <Col sm={6}>
          <p>{this.state.loginOK.statePwdApi}</p>
        </Col>
      </FormGroup>
    </Form>
  )
  }
}

const User = ({ user }) => (
  <tr>
  <td>{user.idUser}</td>
  <td>{user.name}</td>
  <td>{user.lastname}</td>
  <td>{user.adress}</td>
  <td>{user.age}</td>
  <td>{user.phone}</td>
  </tr>
)

User.propTypes = {
  user : React.PropTypes.object,
}

class ListUser extends Component {

  constructor(props) {
    super(props);
    this.state = {users : []};
  }

  componentDidMount(){
    fetch('http://carbillet.net/api-digitalGrenoble/users/')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          users: response.users,
        });
      });
  }

  render(){
    return(
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Adresse</th>
            <th>Age</th>
            <th>Téléphone</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((user) => (
            <User key={user.idUser} user={user} />
          ))}
        </tbody>
      </Table>
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
        <FormLogin/>
        <ListUser/>
      </div>
      </div>
  )}
}

export default App;

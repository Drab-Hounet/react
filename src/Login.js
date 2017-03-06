import React, { Component } from 'react';
import { Button, Form, Col, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';


class Login extends Component{

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

export default Login;

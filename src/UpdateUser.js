import React, {Component} from 'react';
import {Fade, Button, Form, FormGroup, Col, ControlLabel, FormControl, Label}  from 'react-bootstrap';


class UpdateUser extends Component {
  constructor(props){
    super(props);
    this.state = {  adress: this.props.user.adress,
                    age: this.props.user.age,
                    phone: this.props.user.phone,
                    stateUpdate : ''};

    this.handleChangeAdress = this.handleChangeAdress.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      adress:nextProps.user.adress,
      age:nextProps.user.age,
      phone:nextProps.user.phone
    })
  }

  handleChangeAdress(event){
    this.setState({adress:event.target.value});
  }

  handleChangeAge(event){
    this.setState({age:event.target.value});
  }

  handleChangePhone(event){
    this.setState({phone:event.target.value});
  }

  handleSubmit() {
    fetch('http://carbillet.net/api-digitalGrenoble/users/', {
      method: 'PUT',
      headers: {
         Accept: 'application/json',
         'Content-type': "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: JSON.stringify({json :{
              idUser  : this.props.user.idUser,
              adress  : this.state.adress,
              age     : this.state.age,
              phone   : this.state.phone,
            }})
    }).then((response) => response.json())
      .then((response) => {
        console.log(response.majMessage);
        (response.majMessage === 'UPDATE_USER_SUCCESS')?this.setState({stateUpdate:'mise à jour réussi !'}):1;
      })
  }

  render(){
    return(
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Adresse
          </Col>
          <Col sm={9}>
            <FormControl type="text" value={this.state.adress} onChange={this.handleChangeAdress} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Age
          </Col>
          <Col sm={9}>
            <FormControl type="text" value={this.state.age} onChange={this.handleChangeAge}/>
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Téléphone
          </Col>
          <Col sm={9}>
            <FormControl type="text" value={this.state.phone} onChange={this.handleChangePhone}/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={2}>
            <Button type="button" onClick={this.handleSubmit}>
              Save
            </Button>
          </Col>
          <Col sm={6}>
              <Label bsStyle="success">{this.state.stateUpdate}</Label>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}
export default UpdateUser;

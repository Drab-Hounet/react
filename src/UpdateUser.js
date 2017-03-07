import React, {Component} from 'react';
import {Button, Form, FormGroup, Col, ControlLabel, FormControl}  from 'react-bootstrap';


class UpdateUser extends Component {
  constructor(props){
    super(props);
    this.state = {  adress: this.props.user.adress,
                    age: this.props.user.age,
                    phone: this.props.user.phone};

    this.handleChangeAdress = this.handleChangeAdress.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
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
              idUser : 31,
              adress : this.state.adress,
              age : this.state.age,
              phone : this.state.phone,
            }})
    }).then((response) => response.json())
      .then((response) => {
        console.log(response);
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
        </FormGroup>
      </Form>
    )
  }
}
export default UpdateUser;

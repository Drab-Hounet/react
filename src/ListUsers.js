import React, {Component} from 'react';
import {Table, ButtonToolbar, Button, Modal, Col} from 'react-bootstrap';
import UpdateUser from './UpdateUser'

class ListUsers extends Component {

  constructor(props) {
    super(props);
    this.state={  close : false,
                  oneUser : {},
                  users : [],
                  };
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.getUserOne = this.getUserOne.bind(this);
  }

  getUserOne(id){
    this.hideModal();
    this.state.users.map((user) => {
      if(user.idUser === id){
        this.setState({
          oneUser : user,
        });
        //console.log(user);
      }
    });

  }

  componentDidMount(){
    fetch('http://carbillet.net/api-digitalGrenoble/users/')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          users: response.users,
          close: true,
        });
      });
  }

  hideModal() {
    this.setState({close: false});
  }

  showModal() {
    this.setState({close: true});
  }

  render(){
    console.log(this.state.oneUser);

    return(
      <div>
        <ButtonToolbar>
          <Col smOffset={4} sm={4}>
            <Button bsStyle="primary" onClick={this.showModal} bsSize="large" block>
              Affiche
            </Button>
          </Col>

          <Modal
            show={this.props.showModal && this.state.close}
            onHide={this.hideModal}
            dialogClassName="custom-modal"
            bsSize="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">Liste des Utilisateurs</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                    <tr key={user.idUser}>
                      <td>{user.idUser}</td>
                      <td>{user.name}</td>
                      <td>{user.lastname}</td>
                      <td>{user.adress}</td>
                      <td>{user.age}</td>
                      <td>{user.phone}</td>
                      <td>
                        <Button type="button" onClick={() => this.getUserOne(user.idUser)}><img alt={user.name} src='./update.svg'></img></Button>
                      </td>
                  </tr>
                  ))}

                </tbody>
              </Table>

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.hideModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        </ButtonToolbar>
        <br/>
        <UpdateUser key={this.state.user && this.state.user.idUser} user={this.state.oneUser} />
      </div>
    );
  }
}

export default ListUsers;

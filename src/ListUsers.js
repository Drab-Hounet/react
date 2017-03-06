import React, {Component} from 'react';
import {Table} from 'react-bootstrap';


export const User = ({ user }) => (
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


class ListUsers extends Component {

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

export default ListUsers;

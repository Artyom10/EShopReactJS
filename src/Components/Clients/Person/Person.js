import React from 'react';
import PropTypes from 'prop-types';
import {removeUserActionCreator} from '../../../redux/clientsPage-reducer';

function Person(props) {
 // const {client} = props;
 /// const {id, urlPhoto, firstName, secondName, username, mail, password,request} = client;

  
  return (
    props.clients.map(client =>
   <tr key={client.id}>
     <th scope="row">{client.id}</th>
     <td>{client.firstName}</td>
     <td>{client.secondName}</td>
     <td>{client.username}</td>
     <td>{client.mail}</td>
     <td>{client.request}</td>
    <td><button className="btn delete-client-button" onClick={() => (props.removeUser(client.id))}>Delete</button></td>
  </tr>
  ));
}
/*
Person.propTypes = {
  client: PropTypes.object.isRequired,
  firstName: PropTypes.string,
  secondName: PropTypes.string,
  username: PropTypes.string,
  mail: PropTypes.string,
  request: PropTypes.string,
}
*/
export default Person;

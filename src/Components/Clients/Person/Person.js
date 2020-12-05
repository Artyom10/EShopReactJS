import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {removeUserActionCreator} from '../../../redux/clientsPage-reducer';
import firebaseDb from '../../../firebase';
import stylesFor from './Person.module.css';

function Person(props) {
 
  /*let [clients, setClients] = useState({})
  useEffect(() => {
    firebaseDb.child('clients').on('value', snapshot => {
      if(snapshot.val() != null)
      setClients({
        ...snapshot.val()
      })
    } )
  }, [])*/

  //if(props.clients.length === 0){
 /* Object.keys(clients).map(id => {
    props.setUsers([clients[id]])
  })
}*/

  return (
    props.clients.map(client =>
   <tr key={client.id}>
     <th scope="row">{client.id}</th>
     <td>{client.firstName}</td>
     <td>{client.secondName}</td>
     <td>{client.username}</td>
     <td>{client.mail}</td>
     <td>{client.request}</td>
    <td><button className={`btn ${stylesFor.deleteClientButton}`} onClick={() => (props.removeUser(client.id))}>Delete</button></td>
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

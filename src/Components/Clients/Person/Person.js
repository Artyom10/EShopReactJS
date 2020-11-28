import React from 'react';
import PropTypes from 'prop-types';
import {removeUserActionCreator} from '../../../redux/clientsPage-reducer';

function Person(props) {
  const {client} = props;
  const {id, urlPhoto, firstName, secondName, username, mail, password,request} = client;
  const removeUser = () => {
    debugger;
    const data = {
      "id": id,
      "firstName": firstName,
      "secondName": secondName,
      "username": username,
      "mail": mail,
      "request": request, 
      "password": password,
      "urlPhoto": urlPhoto
    }
    let action = removeUserActionCreator(data);
    props.dispatch(action);
  };

  return (
   <tr>
     <th scope="row">{client.id}</th>
     <td>{firstName}</td>
     <td>{secondName}</td>
     <td>{username}</td>
     <td>{mail}</td>
     <td>{request}</td>
    <td><button className="btn delete-client-button" onClick={removeUser}>Delete</button></td>
  </tr>
  );
}

Person.propTypes = {
  client: PropTypes.object.isRequired,
  firstName: PropTypes.string,
  secondName: PropTypes.string,
  username: PropTypes.string,
  mail: PropTypes.string,
  request: PropTypes.string,
}

export default Person;

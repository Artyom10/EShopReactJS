import React from 'react';
import PropTypes from 'prop-types';
import stylesFor from './Person.module.css';

const Person = (props) => {
  return (
    props.users.map(user =>
      ~user.firstName.indexOf(props.searchUsers)
      ?
<tr key={user.id}>
     <td>{user.firstName}</td>
     <td>{user.secondName}</td>
     <td>{`${user.request}`}</td>
     <td>{user.email}</td>
     {
       user.request
       ? <td><button className={`btn ${stylesFor.deleteClientButton}`} onClick={() => (props.deleteUser(user.id))}>Delete</button></td>
       : <td><button className={`btn ${stylesFor.keepUserButton}`}>No request</button></td>
     }
  </tr>
      : null


  ));
}
/*
Person.propTypes = {
  client: PropTypes.object,
  firstName: PropTypes.string,
  secondName: PropTypes.string,
  username: PropTypes.string,
  mail: PropTypes.string,
  request: PropTypes.string,
}
*/


export default Person;

import React from 'react';
import PropTypes from 'prop-types';

function Person(props) {
  const {client} = props;
  const {firstName, secondName, username, mail, request} = client;
  return (
   <tr>
     <th scope="row">{client.id}</th>
     <td>{firstName}</td>
     <td>{secondName}</td>
     <td>{username}</td>
     <td>{mail}</td>
     <td>{request}</td>
    <td><button className="btn delete-client-button">Delete</button></td>
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

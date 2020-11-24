import React from 'react';

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

export default Person;

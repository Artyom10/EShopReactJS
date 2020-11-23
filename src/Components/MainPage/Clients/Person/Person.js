import React from 'react';

function Person(props) {
  const {client} = props;
  return (
   <tr>
     <th scope="row">{client.id}</th>
     <td>{client.firstName}</td>
     <td>{client.secondName}</td>
     <td>{client.username}</td>
     <td>{client.mail}</td>
     <td>{client.request}</td>
    <td><button className="btn delete-client-button">Delete</button></td>
  </tr>
  );
}

export default Person;

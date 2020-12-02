import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {removeUserActionCreator} from '../../../redux/clientsPage-reducer';
import firebaseDb from '../../../firebase';

function Person(props) {
 
  let [clients, setClients] = useState({})
  useEffect(() => {
    firebaseDb.child('clients').on('value', snapshot => {
      if(snapshot.val() != null)
      setClients({
        ...snapshot.val()
      })
    } )
  }, []) //componentDidMount in class

  if(props.clients.length === 0){
  /* props.setUsers([
    {
      id: 1,
      firstName: "Mark",
      secondName: "Otto",
      username: "@mdo",
      mail: "markotto@gmail.com",
      request: "False",
      password: "12345",
      urlPhoto:
        "https://sun9-11.userapi.com/impg/kmBJYJ5uzeAzzFzjzsKNPk-_-XVrImJWvS0ILw/4c_igfiEqMI.jpg?size=512x512&quality=96&proxy=1&sign=093166373fa3195e88d2f44ed114afcf",
    },
    {
      id: 2,
      firstName: "Jacob",
      secondName: "Thornton",
      username: "@fat",
      mail: "jacobth@gmail.com",
      request: "False",
      password: "12345",
      urlPhoto:
        "https://sun9-11.userapi.com/impg/kmBJYJ5uzeAzzFzjzsKNPk-_-XVrImJWvS0ILw/4c_igfiEqMI.jpg?size=512x512&quality=96&proxy=1&sign=093166373fa3195e88d2f44ed114afcf",
    },
    {
      id: 3,
      firstName: "Larry",
      secondName: "Bird",
      username: "@twitter",
      mail: "larrybird@gmail.com",
      request: "False",
      password: "12345",
      urlPhoto:
        "https://sun9-11.userapi.com/impg/kmBJYJ5uzeAzzFzjzsKNPk-_-XVrImJWvS0ILw/4c_igfiEqMI.jpg?size=512x512&quality=96&proxy=1&sign=093166373fa3195e88d2f44ed114afcf",
    },
  ])*/
  Object.keys(clients).map(id => {
    props.setUsers([clients[id]])
  })
}

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

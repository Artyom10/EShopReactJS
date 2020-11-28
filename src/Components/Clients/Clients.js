import React from 'react';
import PropTypes, { object } from 'prop-types';
import Person from './Person/Person';
import {addPersonActionCreator} from '../../redux/state';


function Clients(props) {
  const addPerson = () => {
    const newPerson = {
      "id": 4,
      "firstName": "Larry",
      "secondName": "Bird",
      "username": "@twitter",
      "mail": "larrybird@gmail.com",
      "request": "False", 
      "password": "12345",
      "urlPhoto": "https://sun9-11.userapi.com/impg/kmBJYJ5uzeAzzFzjzsKNPk-_-XVrImJWvS0ILw/4c_igfiEqMI.jpg?size=512x512&quality=96&proxy=1&sign=093166373fa3195e88d2f44ed114afcf"
   }
   let action = addPersonActionCreator(newPerson);
   props.dispatch(action);
  }



    return (
     <div className="container">
         <table className="table client-table">
         <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Remove request</th>
            <th scope="col">Action</th>
          </tr>
         </thead>
         <tbody>
             {props.clients.map(client => {
               return <Person client={client} dispatch={props.dispatch} />
             })}
         </tbody>
    </table>
    <div className="row justify-content-center">
        <div className="col-md-12">
          <button className="btn btn-primary btn-block add-client-button" onClick={addPerson}>Add new client</button>
        </div>
      </div>
     </div>
    );
}

Clients.propTypes = {
  client: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Clients;
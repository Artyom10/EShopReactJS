import React from 'react';
import PropTypes, { object } from 'prop-types';
import Person from './Person/Person';

function Clients(props) {
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
               return <Person client={client} />
             })}
         </tbody>
    </table>
    <div className="row justify-content-center">
        <div className="col-md-12">
          <button className="btn btn-primary btn-block add-client-button">Add new client</button>
        </div>
      </div>
     </div>
    );
}

Clients.propTypes = {
  client: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Clients;
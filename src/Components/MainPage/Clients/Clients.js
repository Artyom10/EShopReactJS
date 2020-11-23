import React from 'react';
import Person from './Person/Person';
import clients from './ClientsData';

function Clients() {
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
             <Person client={clients[0]}></Person>
             <Person client={clients[1]}></Person>
             <Person client={clients[2]}></Person>
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

export default Clients;
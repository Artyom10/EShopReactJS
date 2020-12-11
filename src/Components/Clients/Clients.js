import React from 'react';
import PropTypes from 'prop-types';
import PersonContainer from './Person/PersonContainer';
import stylesFor from './Clients.module.css';
import { Redirect } from 'react-router-dom';


function Clients(props) {
  if(!props.auth.uid) return <Redirect to='/log_in'/>
    return (
     <div className="container">
         <table className={`table ${stylesFor.clientTable}`}>
         <thead>
          <tr className={stylesFor.trStyle}>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Remove request</th>
            <th scope="col">Action</th>
          </tr>
         </thead>
         <tbody>
             <PersonContainer />
         </tbody>
    </table>
    <div className="row justify-content-center">
        <div className="col-md-12">
          <button className={`btn btn-primary btn-block ${stylesFor.addClientButton}`}>Add new client</button>
        </div>
      </div>
     </div>
    );
}
/*
Clients.propTypes = {
  client: PropTypes.arrayOf(PropTypes.object).isRequired
}*/

export default Clients;
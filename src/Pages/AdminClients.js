import logo from '../logo.svg';
import React from 'react';
import Clients from '../Components/Clients/Clients';
import '../StylesForPages/AdminClients.css';
import ClientsContainer from '../Components/Clients/ClientsContainer';


function AdminClients(props) {
  return (
    <div>
        
        <ClientsContainer  />
       
    </div>
  );
}

export default AdminClients;

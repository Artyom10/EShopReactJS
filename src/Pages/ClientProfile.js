import logo from '../logo.svg';
import React from 'react';
import Profile from '../Components/Profile/Profile';
import '../StylesForPages/ClientProfile.css';

import clients from '../Components/Clients/ClientsData';

function ClientProfile(props) {
  return (
    <div>
        
        <Profile client={props.clients[1]} dispatch={props.dispatch}></Profile>
       
    </div>
  );
}

export default ClientProfile;

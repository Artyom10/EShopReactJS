import logo from '../logo.svg';
import React from 'react';
import Profile from '../Components/Profile/Profile';
import '../StylesForPages/ClientProfile.css';

import clients from '../Components/Clients/ClientsData';

function ClientProfile() {
  return (
    <div>
        
        <Profile client={clients[2]}></Profile>
       
    </div>
  );
}

export default ClientProfile;

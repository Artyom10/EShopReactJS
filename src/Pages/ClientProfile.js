import logo from '../logo.svg';
import React from 'react';
import Profile from '../Components/Profile/Profile';
import '../StylesForPages/ClientProfile.css';

import clients from '../Components/Clients/ClientsData';
import ProfileContainer from '../Components/Profile/ProfileContainer';

function ClientProfile(props) {
  return (
    <div>
        
        <ProfileContainer ></ProfileContainer>
       
    </div>
  );
}

export default ClientProfile;

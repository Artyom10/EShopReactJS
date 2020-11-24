import logo from '../logo.svg';
import React from 'react';
import Nav from '../Components/Navbar/Nav';
import Profile from '../Components/Profile/Profile';
import Footer from '../Components/Footer/Footer';
import '../StylesForPages/ClientProfile.css';

import clients from '../Components/Clients/ClientsData';

function ClientProfile() {
  return (
    <div>
        <Nav></Nav>
        <Profile client={clients[2]}></Profile>
        <Footer></Footer>
    </div>
  );
}

export default ClientProfile;

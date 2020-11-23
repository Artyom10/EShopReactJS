import logo from './logo.svg';
import React from 'react';
import Nav from './Components/MainPage/Navbar/Nav';
import Profile from './Components/MainPage/Profile/Profile';
import Footer from './Components/MainPage/Footer/Footer';
import './ClientProfile.css';

import clients from './Components/MainPage/Clients/ClientsData';

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

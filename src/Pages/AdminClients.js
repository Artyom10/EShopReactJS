import logo from '../logo.svg';
import React from 'react';
import Nav from '../Components/Navbar/Nav';
import Clients from '../Components/Clients/Clients';
import Footer from '../Components/Footer/Footer';
import '../StylesForPages/AdminClients.css';

import clients from '../Components/Clients/ClientsData';

function App() {
  return (
    <div>
        <Nav />
        <Clients  clients={clients}/>
        <Footer />
    </div>
  );
}

export default App;

import logo from '../logo.svg';
import React from 'react';
import Nav from '../Components/Navbar/Nav';
import Clients from '../Components/Clients/Clients';
import Footer from '../Components/Footer/Footer';
import '../StylesForPages/AdminClients.css';

function App() {
  return (
    <div>
        <Nav></Nav>
        <Clients></Clients>
        <Footer></Footer>
    </div>
  );
}

export default App;

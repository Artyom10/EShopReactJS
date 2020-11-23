import logo from '../logo.svg';
import React from 'react';
import Nav from '../Components/MainPage/Navbar/Nav';
import Clients from '../Components/MainPage/Clients/Clients';
import Footer from '../Components/MainPage/Footer/Footer';
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

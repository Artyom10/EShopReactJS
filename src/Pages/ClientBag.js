import logo from '../logo.svg';
import React from 'react';
import Nav from '../Components/Navbar/Nav';
import Bag from '../Components/Bag/Bag';
import Footer from '../Components/Footer/Footer';
import '../StylesForPages/ClientBag.css';

function ClientBag() {
  return (
    <div>
        <Nav></Nav>
        <Bag></Bag>
        <Footer></Footer>
    </div>
  );
}

export default ClientBag;

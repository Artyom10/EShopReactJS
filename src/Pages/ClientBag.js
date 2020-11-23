import logo from '../logo.svg';
import React from 'react';
import Nav from '../Components/MainPage/Navbar/Nav';
import Bag from '../Components/MainPage/Bag/Bag';
import Footer from '../Components/MainPage/Footer/Footer';
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

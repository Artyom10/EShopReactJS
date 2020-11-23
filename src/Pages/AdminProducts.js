import logo from '../logo.svg';
import React from 'react';
import Nav from '../Components/MainPage/Navbar/Nav';
import AddProductButton from '../Components/MainPage/ProductsList/AddPoductButton/AddProductButton';
import ProductsList from '../Components/MainPage/ProductsList/ProductsList';
import Footer from '../Components/MainPage/Footer/Footer';
import '../StylesForPages/AdminProducts.css';

function App() {
  return (
    <div>
        <Nav></Nav>
        <AddProductButton></AddProductButton>
        <ProductsList></ProductsList>
        <Footer></Footer>
    </div>
  );
}

export default App;

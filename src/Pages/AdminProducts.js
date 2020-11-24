import logo from '../logo.svg';
import React from 'react';
import Nav from '../Components/Navbar/Nav';
import AddProductButton from '../Components/ProductsList/AddPoductButton/AddProductButton';
import ProductsList from '../Components/ProductsList/ProductsList';
import Footer from '../Components/Footer/Footer';
import '../StylesForPages/AdminProducts.css';

import products from '../Components/Products/ProductsData';

function App() {
  return (
    <div>
        <Nav></Nav>
        <AddProductButton></AddProductButton>
        <ProductsList products={products}></ProductsList>
        <Footer></Footer>
    </div>
  );
}

export default App;

import logo from '../logo.svg';
import React from 'react';
import ProductsList from '../Components/ProductsList/ProductsList';
import '../StylesForPages/AdminProducts.css';
import ProductsListContainer from '../Components/ProductsList/ProductsListContainer';


function AdminProducts(props) {
  return (
    <div>
        
        <ProductsListContainer  />
       
    </div>
  );
}

export default AdminProducts;

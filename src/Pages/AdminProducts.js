import logo from '../logo.svg';
import React from 'react';
import ProductsList from '../Components/ProductsList/ProductsList';
import '../StylesForPages/AdminProducts.css';


function AdminProducts(props) {
  return (
    <div>
        
        <ProductsList products={props.products} dispatch={props.dispatch}
        newProductObject={props.newProductObject} />
       
    </div>
  );
}

export default AdminProducts;

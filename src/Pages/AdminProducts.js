import logo from '../logo.svg';
import React from 'react';
import ProductsList from '../Components/ProductsList/ProductsList';
import '../StylesForPages/AdminProducts.css';


function App(props) {
  return (
    <div>
        
        <ProductsList products={props.products} />
       
    </div>
  );
}

export default App;

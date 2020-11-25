import logo from '../logo.svg';
import React from 'react';
import ProductsList from '../Components/ProductsList/ProductsList';
import '../StylesForPages/AdminProducts.css';

import products from '../Components/Products/ProductsData';

function App() {
  return (
    <div>
        
        <ProductsList products={products} />
       
    </div>
  );
}

export default App;

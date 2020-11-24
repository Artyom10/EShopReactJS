import React from 'react';
import BagCard from './BagCard/BagCard';
import BagPayment from './BagPayment/BagPayment';
import BagBill from './BagBill/BagBill';
import products from '../Products/ProductsData';


function Bag() {
    return (
    <div>
      <div className="container">
           <BagCard product={products[0]}></BagCard>
           <BagCard product={products[3]}></BagCard>
      </div>
      <BagPayment />
      <BagBill />
   </div>
    );
}

export default Bag;
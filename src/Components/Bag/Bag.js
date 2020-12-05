import React from 'react';
import BagCard from './BagCard/BagCard';
import BagPayment from './BagPayment/BagPayment';
import BagCardContainer from './BagCard/BagCardContainer';
import BagBillContainer from './BagBill/BagBillContainer';


function Bag(props) {
    return (
    <div>
      <div className="container">
           <BagCardContainer />
      </div>
      <BagPayment />
      <BagBillContainer/>
   </div>
    );
}

export default Bag;
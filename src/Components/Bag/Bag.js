import React from 'react';
import BagCard from './BagCard/BagCard';
import BagPayment from './BagPayment/BagPayment';
import BagBill from './BagBill/BagBill';
import BagCardContainer from './BagCard/BagCardContainer';


function Bag(props) {
    return (
    <div>
      <div className="container">
           {/*props.bags.map( bag => {
             return <BagCardContainer  />
           })*/}
           <BagCardContainer />
      </div>
      <BagPayment />
      <BagBill bags={props.bags}/>
   </div>
    );
}

export default Bag;
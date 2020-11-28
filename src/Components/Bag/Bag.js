import React from 'react';
import BagCard from './BagCard/BagCard';
import BagPayment from './BagPayment/BagPayment';
import BagBill from './BagBill/BagBill';


function Bag(props) {
    return (
    <div>
      <div className="container">
           {props.bags.map( bag => {
             return <BagCard  bagItem={bag} dispatch={props.dispatch}/>
           })}
      </div>
      <BagPayment />
      <BagBill bags={props.bags}/>
   </div>
    );
}

export default Bag;
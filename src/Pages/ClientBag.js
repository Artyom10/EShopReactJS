import logo from '../logo.svg';
import React from 'react';
import Bag from '../Components/Bag/Bag';
import '../StylesForPages/ClientBag.css';



function ClientBag(props) {
  return (
    <div>
        <Bag bags={props.bags} dispatch={props.dispatch}/>
    </div>
  );
}

export default ClientBag;

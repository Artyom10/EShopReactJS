import React from 'react';
import BagCard from './BagCard/BagCard';
import BagPayment from './BagPayment/BagPayment';
import BagBill from './BagBill/BagBill';
import BagCardContainer from './BagCard/BagCardContainer';
import { connect } from 'react-redux';
import Bag from './Bag';

const mapStateToProp = (state) => {
    return {
     bags: state.bagPage.bags,
    }
 }
 
 /*const mapDispatchToProp = (dispatch) => {
   return {
       
   }
 }*/
 
 const BagContainer = connect(mapStateToProp,{})(Bag);

export default BagContainer;
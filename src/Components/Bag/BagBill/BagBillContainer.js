import React from 'react';
import BagBill from './BagBill'
import { connect } from 'react-redux';

const mapStateToProp = (state) => {
    return {
        //bags: state.firebase.profile.bags
    }
 }

 
 const BagBillContainer = connect(mapStateToProp,{})(BagBill);

export default BagBillContainer;

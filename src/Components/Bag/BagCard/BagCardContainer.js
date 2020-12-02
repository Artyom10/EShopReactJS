import React from 'react';
import PropTypes from 'prop-types';
import { removeTarget } from '../../../redux/bagPage-reducer';
import BagCard from './BagCard';
import { connect } from 'react-redux';


const mapStateToProp = (state) => {
    return {
     bags: state.bagPage.bags,
    }
 }
 
 /*const mapDispatchToProp = (dispatch) => {
   return {
       removeFromBag: (id) => {
        let action = removeTargetActionCreator(id);
        dispatch(action);
       }
   }
 }*/
 
 const BagCardContainer = connect(mapStateToProp,{ removeFromBag: removeTarget,})(BagCard);

export default BagCardContainer;

import React from 'react';
import PropTypes from 'prop-types';
import ProductRating from '../ProductCard/ProductRating/ProductRating';
import { addToBagActionCreator } from '../../../redux/bagPage-reducer';
import { connect } from 'react-redux';
import MoreAboutProduct from './SeeMoreProduct';


const mapStateToProp = (state) => {
    return {
     product: state.productPages.products[1],
    }
 }
 
 const mapDispatchToProp = (dispatch) => {
   return {
       addToBag: (data) => {
        let action = addToBagActionCreator(data);
        dispatch(action);
       }
   }
 }
 
 const MoreAboutProductContainer = connect(mapStateToProp,mapDispatchToProp)(MoreAboutProduct);



export default MoreAboutProductContainer;

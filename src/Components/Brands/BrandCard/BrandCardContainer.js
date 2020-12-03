import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BrandCard from './BrandCard';
import { setCertainProductsAC } from '../../../redux/productPages-reducer';



const mapStateToProp = (state) => {
    return {
     brands: state.mainPage.brands,
    }
 }
 
 const mapDispatchToProp = (dispatch) => {
   return {
    showCertainProducts: (titleOfProducts) => {
      let action = setCertainProductsAC(titleOfProducts);
      dispatch(action);
    }
   }
 }
 
 const BrandCardContainer = connect(mapStateToProp,mapDispatchToProp)(BrandCard);


export default BrandCardContainer;

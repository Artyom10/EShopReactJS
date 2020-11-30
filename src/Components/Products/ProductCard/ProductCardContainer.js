import React from 'react';
import PropTypes from 'prop-types';
import ProductRating from './ProductRating/ProductRating';
import { NavLink } from 'react-router-dom';
import ProductCard from './ProductCard';
import { connect } from 'react-redux';

const mapStateToProp = (state) => {
    return {
     products: state.productPages.products,
    }
 }
 
 const mapDispatchToProp = (dispatch) => {
   return {
       
   }
 }
 
 const ProductCardContainer = connect(mapStateToProp,mapDispatchToProp)(ProductCard);

export default ProductCardContainer;

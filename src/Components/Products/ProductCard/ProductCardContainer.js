import React from 'react';
import PropTypes from 'prop-types';
import ProductRating from './ProductRating/ProductRating';
import { NavLink } from 'react-router-dom';
import ProductCard from './ProductCard';
import { connect } from 'react-redux';
import { setProductsAC } from '../../../redux/productPages-reducer';
import { addToBag } from '../../../redux/bagPage-reducer';

const mapStateToProp = (state) => {
    return {
     products: state.productPages.products,
    }
 }
 
 const mapDispatchToProp = (dispatch) => {
   return {
    setProducts: (products) => {
      let action = setProductsAC(products);
      dispatch(action);
     },
    addToBag: (product) => {
      let action = addToBag(product);
      dispatch(action);
    },
   }
 }
 
 const ProductCardContainer = connect(mapStateToProp,mapDispatchToProp)(ProductCard);

export default ProductCardContainer;

import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from "./ProductCard/ProductCard";
import './Products.css'
import { connect } from 'react-redux';
import ShowProducts from './ShowPoducts';

const mapStateToProp = (state) => {
    return {
     products: state.productPages.products,
    }
 }
 
 const mapDispatchToProp = (dispatch) => {
   return {
       
   }
 }
 
 const ShowProductsContainer = connect(mapStateToProp,mapDispatchToProp)(ShowProducts);


export default ShowProductsContainer;
import React from 'react';
import PropTypes from 'prop-types';
import ProductAdminCard from './ProductAdminCard/ProductAdminCard';
import AddProductButton from './AddPoductButton/AddProductButton';
import ModalAddProduct from './ModalAddProduct/ModalAddProduct';
import ProductAdminCardContainer from './ProductAdminCard/ProductAdminCardContainer';
import ProductList from './ProductsList';
import { connect } from 'react-redux';


const mapStateToProp = (state) => {
    return {
     products: state.productPages.products,
     changedProductObject: state.productPages.changedProductObject,
     newProductObject: state.productPages.newProductObject,
    }
 }
 
 const mapDispatchToProp = (dispatch) => {
   return {
   
   }
 }
 
 const ProductListContainer = connect(mapStateToProp,mapDispatchToProp)(ProductList);
   

export default ProductListContainer;
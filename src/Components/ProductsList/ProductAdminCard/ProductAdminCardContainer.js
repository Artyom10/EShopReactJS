import React from 'react';
import PropTypes from 'prop-types';
import {removeProductActionCreator, setProductsAC} from '../../../redux/productPages-reducer';
import {editProductActionCreator} from '../../../redux/productPages-reducer';
import {updateProductInListActionCreator} from '../../../redux/productPages-reducer';
import ProductAdminCard from './ProductAdminCard';
import { connect } from 'react-redux';

const mapStateToProp = (state) => {
    return {
     products: state.productPages.products,
     changedProductObject: state.productPages.changedProductObject,
    }
 }
 
 const mapDispatchToProp = (dispatch) => {
   return {
    removeProduct: (id) => {
        let action = removeProductActionCreator(id);
        dispatch(action);
       },
    editProductAdmin: (id) => {
        let action = editProductActionCreator(id);
        dispatch(action);
       },
    changeProduct: (data) => {
        let action = updateProductInListActionCreator(data);
        dispatch(action);
    },
    setProducts: (products) => {
        let action = setProductsAC(products);
        dispatch(action);
    }
   }
 }
 
 const ProductAdminCardContainer = connect(mapStateToProp,mapDispatchToProp)(ProductAdminCard);
   
export default ProductAdminCardContainer;

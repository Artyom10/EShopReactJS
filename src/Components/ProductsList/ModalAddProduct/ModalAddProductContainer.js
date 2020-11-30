import { checkPropTypes } from 'prop-types';
import React from 'react';
import ProductAdminCard from '../ProductAdminCard/ProductAdminCard';
import {addProductActionCreator,updateProductActionCreator} from '../../../redux/productPages-reducer';
import ModalAddProduct from './ModalAddProduct';
import { connect } from 'react-redux';

const mapStateToProp = (state) => {
    return {
     products: state.productPages.products,
     newProductObject: state.productPages.newProductObject,
     newPrice: state.productPages.newPrice,
     newPhoto: state.productPages.newPhoto,
     newProducer: state.productPages.newProducer,
     newType: state.productPages.newType,
     newSizes: state.productPages.newSizes,
     newDescription: state.productPages.newDescription,
     newTags: state.productPages.newText
    }
 }
 
 const mapDispatchToProp = (dispatch) => {
   return {
    addProduct: () => {
        dispatch(addProductActionCreator());
       },
    updateProduct: (from,newText) => {
        let action = updateProductActionCreator(from,newText)
        dispatch(action);
    }
    
   }
 }
 
 const ModalAddProductContainer = connect(mapStateToProp,mapDispatchToProp)(ModalAddProduct);


export default ModalAddProductContainer;
import React from 'react';
import ProductList from './ProductsList';
import { connect } from 'react-redux';


const mapStateToProp = (state) => {
    return {
     products: state.productPages.products,
     changedProductObject: state.productPages.changedProductObject,
     newProductObject: state.productPages.newProductObject,
    }
 }
 
 const ProductListContainer = connect(mapStateToProp,{})(ProductList);
   

export default ProductListContainer;
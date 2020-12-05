import React from 'react';
import { connect } from 'react-redux';
import ShowProducts from './ShowPoducts';

const mapStateToProp = (state) => {
    return {
     products: state.productPages.products,
    }
 }

 const ShowProductsContainer = connect(mapStateToProp,{})(ShowProducts);


export default ShowProductsContainer;
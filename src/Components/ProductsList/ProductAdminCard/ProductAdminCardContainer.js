import React from 'react';
import PropTypes from 'prop-types';
import {removeProduct, setProducts} from '../../../redux/productPages-reducer';
import {editProductAdmin} from '../../../redux/productPages-reducer';
import {changeProduct} from '../../../redux/productPages-reducer';
import ProductAdminCard from './ProductAdminCard';
import { connect } from 'react-redux';

const mapStateToProp = (state) => {
    return {
     products: state.productPages.products,
     changedProductObject: state.productPages.changedProductObject,
    }
 }

 const ProductAdminCardContainer = connect(mapStateToProp,{removeProduct, editProductAdmin, changeProduct, setProducts})(ProductAdminCard);
   
export default ProductAdminCardContainer;

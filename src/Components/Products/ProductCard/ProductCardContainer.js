import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import { connect } from 'react-redux';
import { setProducts } from '../../../redux/productPages-reducer';
import { addToBag } from '../../../redux/bagPage-reducer';

const mapStateToProp = (state) => {
    return {
     products: state.productPages.products,
    }
 }
 
 
 const ProductCardContainer = connect(mapStateToProp,{setProducts, addToBag, })(ProductCard);

export default ProductCardContainer;

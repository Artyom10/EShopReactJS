import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BrandCard from './BrandCard';
import {showCertainProducts } from '../../../redux/productPages-reducer';



const mapStateToProp = (state) => {
    return {
     brands: state.mainPage.brands,
    }
 }
 
 const BrandCardContainer = connect(mapStateToProp,{showCertainProducts,})(BrandCard);


export default BrandCardContainer;

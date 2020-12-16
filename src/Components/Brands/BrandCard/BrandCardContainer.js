import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BrandCard from './BrandCard';



const mapStateToProp = (state) => {
    return {
     brands: state.mainPage.brands,
    }
 }
 
 const BrandCardContainer = connect(mapStateToProp,{})(BrandCard);


export default BrandCardContainer;

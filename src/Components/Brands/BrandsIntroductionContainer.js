import React from 'react';
import BrandCard from './BrandCard/BrandCard'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BrandIntroduction from './BrandsIntroduction';


const mapStateToProp = (state) => {
    return {
     brands: state.mainPage.brands,
    }
 }

 
 const BrandsIntroductionContainer = connect(mapStateToProp,{})(BrandIntroduction);

export default BrandsIntroductionContainer;
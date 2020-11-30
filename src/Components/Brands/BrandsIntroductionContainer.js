import React from 'react';
import BrandCard from './BrandCard/BrandCard'
import PropTypes from 'prop-types';
import './BrandsIntroduction.css';
import { connect } from 'react-redux';
import BrandIntroduction from './BrandsIntroduction';


const mapStateToProp = (state) => {
    return {
     brands: state.mainPage.brands,
    }
 }
 
 const mapDispatchToProp = (dispatch) => {
   return {
       
   }
 }
 
 const BrandsIntroductionContainer = connect(mapStateToProp,mapDispatchToProp)(BrandIntroduction);

export default BrandsIntroductionContainer;
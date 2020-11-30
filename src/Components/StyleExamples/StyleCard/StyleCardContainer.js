import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import StyleCard from './StyleCard';

const mapStateToProp = (state) => {
    return {
        stylesExample: state.mainPage.stylesData,
    }
 }
 
 const mapDispatchToProp = (dispatch) => {
   return {
       
   }
 }
 
 const StyleCardContainer = connect(mapStateToProp,mapDispatchToProp)(StyleCard);

export default StyleCardContainer;


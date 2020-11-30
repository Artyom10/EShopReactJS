import React from 'react';
import PropTypes from 'prop-types';
import StyleCard from './StyleCard/StyleCard';
import './StyleExamples.css';
import { connect } from 'react-redux';
import StyleExamples from './StyleExamples';

const mapStateToProp = (state) => {
    return {
        stylesExample: state.mainPage.stylesData,
    }
 }
 
 const mapDispatchToProp = (dispatch) => {
   return {
       
   }
 }
 
 const StyleExamplesContainer = connect(mapStateToProp,mapDispatchToProp)(StyleExamples);



export default StyleExamplesContainer;
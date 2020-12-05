import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StyleExamples from './StyleExamples';

const mapStateToProp = (state) => {
    return {
        stylesExample: state.mainPage.stylesData,
    }
 }

 const StyleExamplesContainer = connect(mapStateToProp,{})(StyleExamples);



export default StyleExamplesContainer;
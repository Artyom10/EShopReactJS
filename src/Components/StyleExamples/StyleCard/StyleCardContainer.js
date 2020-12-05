import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import StyleCard from './StyleCard';

const mapStateToProp = (state) => {
    return {
        stylesExample: state.mainPage.stylesData,
    }
 }

 
 const StyleCardContainer = connect(mapStateToProp,{})(StyleCard);

export default StyleCardContainer;


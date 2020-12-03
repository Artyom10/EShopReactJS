import React from 'react';
import PropTypes from 'prop-types';
import { removeTarget, setBags} from '../../../redux/bagPage-reducer';
import BagCard from './BagCard';
import { connect } from 'react-redux';
import BagCardC from './BagCardC';

const mapStateToProp = (state) => {
    return {
     bags: state.bagPage.bags,
    }
 }

 
 const BagCardContainer = connect(mapStateToProp,{ removeFromBag: removeTarget, setBags})(BagCard);

export default BagCardContainer;

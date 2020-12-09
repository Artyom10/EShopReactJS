import React from 'react';
import PropTypes, { object } from 'prop-types';
import Person from './Person';
import { connect } from 'react-redux';

import { removeUser, setUsers } from '../../../redux/reducers/clientsPageReducer';



const mapStateToProp = (state) => {
   return {
    clients: state.clientsPage.clients,
   }
}


const PersonContainer = connect(mapStateToProp,{removeUser, setUsers,})(Person);


export default PersonContainer;
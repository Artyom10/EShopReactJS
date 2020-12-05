import React from 'react';
import PropTypes, { object } from 'prop-types';
import {addPerson} from '../../redux/clientsPage-reducer';
import { connect } from 'react-redux';
import Clients from './Clients';



const mapStateToProp = (state) => {
   return {
    clients: state.clientsPage.clients,
   }
}

const ClientsContainer = connect(mapStateToProp,{addPerson,})(Clients);


export default ClientsContainer;
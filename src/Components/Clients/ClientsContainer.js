import React from 'react';
import PropTypes, { object } from 'prop-types';
import Person from './Person/Person';
import {addPerson} from '../../redux/clientsPage-reducer';
import { connect } from 'react-redux';
import Clients from './Clients';



const mapStateToProp = (state) => {
   return {
    clients: state.clientsPage.clients,
   }
}

/*const mapDispatchToProp = (dispatch) => {
  return {
      addPerson: (newPerson) => {
         let action = addPersonActionCreator(newPerson);
         dispatch(action);
      }
  }
}*/

const ClientsContainer = connect(mapStateToProp,{addPerson,})(Clients);


export default ClientsContainer;
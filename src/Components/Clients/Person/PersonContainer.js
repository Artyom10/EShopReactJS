import React from 'react';
import PropTypes, { object } from 'prop-types';
import Person from './Person';
import { connect } from 'react-redux';

import { removeUser, setUsers } from '../../../redux/clientsPage-reducer';



const mapStateToProp = (state) => {
   return {
    clients: state.clientsPage.clients,
   }
}

/*const mapDispatchToProp = (dispatch) => {
  return {
     removeUser: (id) => {
         let action = removeUserActionCreator(id);
         dispatch(action);
      },
      setUsers: (clientId) => {
         dispatch(setUsersActionCreator(clientId));
      }
  }
}*/

const PersonContainer = connect(mapStateToProp,{removeUser, setUsers,})(Person);


export default PersonContainer;
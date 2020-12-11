import React from 'react';
import PropTypes, { object } from 'prop-types';
import Person from './Person';
import { connect } from 'react-redux';

import { removeUser, setUsers } from '../../../redux/reducers/clientsPageReducer';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';



const mapStateToProps = (state) => {
   return {
    //clients: state.clientsPage.clients,
    users: state.firestore.ordered.users || state.clientsPage.clients,
   }
}


export default compose(
   connect(mapStateToProps,{}),
   firestoreConnect([
      {collection: 'users'}
   ])
)(Person)
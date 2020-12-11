import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Clients from './Clients';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class ClientsContainer extends Component {
   render(){;
       return(
        <Clients/>
       );
   }
}


const mapStateToProps = (state) => {
   return {
    //clients: state.clientsPage.clients,
    auth: state.firebase.auth,
    users: state.firestore.ordered.users || state.clientsPage.clients,
   }
}

export default compose(
   connect(mapStateToProps,{}),
   firestoreConnect([
      {collection: 'users'}
   ])
)(Clients)
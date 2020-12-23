import React from 'react';
import { connect } from 'react-redux';
import Clients from './Clients';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { deleteUser } from '../../redux/actions/clientsActions';

const mapStateToProps = (state) => {
   return {
    auth: state.firebase.auth,
    users: state.firestore.ordered.users || [],
    profile: state.firebase.profile,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      deleteUser: (id) => dispatch(deleteUser(id)),
   }
}

export default compose(
   connect(mapStateToProps,mapDispatchToProps),
   firestoreConnect([
      {collection: 'users', where: ['isWho', '==', 'user']}
   ])
)(Clients)
import React from 'react';
import Person from './Person';
import { connect } from 'react-redux';

import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { deleteUser } from '../../../redux/actions/clientsActions';

const PersonContainer = (props) => {
   return(
        <Person searchUsers={props.searchUsers} />
   );
}


const mapStateToProps = (state) => {
   return {
    users: state.firestore.ordered.users || [],
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
      {collection: 'users'}
   ])
)(Person)
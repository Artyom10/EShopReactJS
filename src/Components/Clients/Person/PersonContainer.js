import React from 'react';
import Person from './Person';
import { connect } from 'react-redux';
import { deleteUser } from '../../../redux/actions/clientsActions';

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


export default connect(mapStateToProps,mapDispatchToProps)(Person);
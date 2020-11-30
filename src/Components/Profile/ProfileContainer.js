import React from 'react';
import PropTypes from 'prop-types';
import ModalDeleteProfile from './ModalDeleteProfile/ModalDeleteProfile';
import {removeRequestActionCreator} from '../../redux/clientsPage-reducer';
import Profile from './Profile';
import { connect } from 'react-redux';


const mapStateToProp = (state) => {
    return {
     client: state.clientsPage.clients[2],
    }
 }
 
 const mapDispatchToProp = (dispatch) => {
   return {
    removeRequest: (data) => {
        let action = removeRequestActionCreator(data);
       dispatch(action);
    } 
   }
 }
 
 const ProfileContainer = connect(mapStateToProp,mapDispatchToProp)(Profile);

export default ProfileContainer;
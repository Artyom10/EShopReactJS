import React from 'react';
import PropTypes from 'prop-types';
import ModalDeleteProfile from './ModalDeleteProfile/ModalDeleteProfile';
import {removeRequestActionCreator, setProfiles} from '../../redux/clientsPage-reducer';
import Profile from './Profile';
import { connect } from 'react-redux';


const mapStateToProp = (state) => {
    return {
    // client: state.clientsPage.clients[2], //Не было реализации, получает одного клиента как профиль для отрисовки, но теперь state пуст
    client: state.clientsPage.clients[1],
    }
 }
 
 const mapDispatchToProp = (dispatch) => {
   return {
    removeRequest: (id) => {
        let action = removeRequestActionCreator(id);
       dispatch(action);
    },
    setClients: (profiles) => {
      let action = setProfiles(profiles);
      dispatch(action);
    }
   }
 }
 
 const ProfileContainer = connect(mapStateToProp,mapDispatchToProp)(Profile);

export default ProfileContainer;
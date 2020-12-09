import React from 'react';
import PropTypes from 'prop-types';
import {removeRequest, setProfiles} from '../../redux/reducers/clientsPageReducer';
import Profile from './Profile';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';


const mapStateToProp = (state) => {
    return {
    // client: state.clientsPage.clients[2], //Не было реализации, получает одного клиента как профиль для отрисовки, но теперь state пуст
    client: state.clientsPage.clients[1],
    auth: state.firebase.auth,
    }
 }
 
 const ProfileContainer = connect(mapStateToProp,{removeRequest, setProfiles, })(Profile);

export default ProfileContainer;
import React from 'react';
import PropTypes from 'prop-types';
import {removeRequest, setProfiles} from '../../redux/clientsPage-reducer';
import Profile from './Profile';
import { connect } from 'react-redux';


const mapStateToProp = (state) => {
    return {
    // client: state.clientsPage.clients[2], //Не было реализации, получает одного клиента как профиль для отрисовки, но теперь state пуст
    client: state.clientsPage.clients[1],
    }
 }
 
 const ProfileContainer = connect(mapStateToProp,{removeRequest, setProfiles, })(Profile);

export default ProfileContainer;
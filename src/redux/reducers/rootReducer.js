import authRecuder from './authReducer';
import bagPageReducer from './bagPageReducer';
import clientsPageReducer from './clientsPageReducer';
import mainPageReducer from './mainPageReducer';
import productPagesReducer from './productPagesReducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  auth: authRecuder,
  mainPage: mainPageReducer,
  clientsPage: clientsPageReducer,
  productPages: productPagesReducer,
  bagPage: bagPageReducer,
  profileSet: profileReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
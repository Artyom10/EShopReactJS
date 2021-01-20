import authRecuder from './authReducer';
import productPagesReducer from './productPagesReducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
import profileReducer from './profileReducer';
import clientsPageReducer from './clientsPageReducer';

const rootReducer = combineReducers({
  auth: authRecuder,
  productPages: productPagesReducer,
  profileSet: profileReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  clients: clientsPageReducer,
});

export default rootReducer;
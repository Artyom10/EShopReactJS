import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import thunk from 'redux-thunk';
import {reduxFirestore,getFirestore, createFirestoreInstance} from 'redux-firestore';
import {ReactReduxFirebaseProvider ,reactReduxFirebase,getFirebase, isLoaded} from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app';
import {storage} from './config/fbConfig';

const store = createStore(rootReducer,
  compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(fbConfig),
  )
);

const config = {
  userProfile: 'users', // where profiles are stored in database 
  presence: 'presence', // where list of online users is stored in database
  useFirestoreForProfile: true
};

const rrfProps = {
  firebase,
  config,
  dispatch: store.dispatch,
  createFirestoreInstance
};

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className="app">
    <div className="content"></div>
  </div>;
      return children
}

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <AuthIsLoaded>
            <App />
          </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
     </Provider>
    </BrowserRouter>
    </React.StrictMode>
  ,document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

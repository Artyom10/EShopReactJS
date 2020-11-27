import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import store from './redux/state';


import { BrowserRouter, Route, Router } from 'react-router-dom';





const rerenderTree = (state) => { //берём state из store.getState() в rerenderTree
ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
    <App state={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}

rerenderTree(store.getState());

store.subscribe(rerenderTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

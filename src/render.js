import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router } from 'react-router-dom';

import {addProduct} from './redux/state';




export let rerenderTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
    <App state={state} addProduct={addProduct}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}



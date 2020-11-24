import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AdminProducts from './Pages/AdminProducts';
import AdminClients from './Pages/AdminClients';
import ClientBag from './Pages/ClientBag';
import ClientProfile from './Pages/ClientProfile'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AdminClients />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

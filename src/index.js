import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*
import clients from './Components/Clients/ClientsData';
import products from './Components/Products/ProductsData';
import brands from './Components/Brands/BrandsData';
import sliders from './Components/Slider/SliderData';
import stylesExample from './Components/StyleExamples/StyleExamplesData';
import bags from './Components/Bag/BagData';
*/
import state from './redux/state';

ReactDOM.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import state from './redux/state';
import {addProduct} from './redux/state';

/*addProduct({
                "urlPhoto": "https://sun9-52.userapi.com/impg/xWd_NaCKK7vVjAIBP0dTekN36nsRI9kidnelOw/V7IfJ1kIGO8.jpg?size=762x1100&quality=96&proxy=1&sign=ec477ba05df76b5c6a800f2f0b3ebeee",
                "price": "500$",
                "producer": "Mango",
                "type": "Pants",
                "sizes": "M,L,XL",
                "description": "Something",
                "tags": "#mango, #pants"
});*/

ReactDOM.render(
  <React.StrictMode>
    <App state={state} addProduct={addProduct}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

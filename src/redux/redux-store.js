import {createStore, combineReducers} from 'redux';
import productPagesReducer from './productPages-reducer';
import mainPageReducer from './mainPage-reducer';
import clientsPageReducer from './clientsPage-reducer';
import bagPageReducer from './bagPage-reducer';

let reducers = combineReducers({
  mainPage: mainPageReducer,
  clientsPage: clientsPageReducer,
  productPages: productPagesReducer,
  bagPage: bagPageReducer
})

let store = createStore(reducers);
window.store =store;
export default store;
import logo from './logo.svg';
import React from 'react';
import Nav from './Components/Navbar/Nav';
import Footer from './Components/Footer/Footer';
import MainPage from './Pages/MainPage';
import ClientProfile from './Pages/ClientProfile';
import ClientBag from './Pages/ClientBag';
import AdminClients from './Pages/AdminClients';
import AdminProducts from './Pages/AdminProducts'; 

import MoreAboutProduct from './Components/Products/SeeMoreProduct/SeeMoreProduct'

import './App.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import store from './redux/state';



const  App = (props) => {
  return (
     <div>
       <Nav></Nav>
       <Route path="/main" 
       render={ () => <MainPage products={props.state.mainPage.products} brands={props.state.mainPage.brands} sliders={props.state.mainPage.sliders} stylesExample={props.state.mainPage.stylesData} />}/>
       <Route path="/profile" 
       render={ () => <ClientProfile />} />
       <Route path="/bag" 
       render={ () => <ClientBag bags={props.state.bagPage.bags}  dispatch={props.dispatch}/>} />
       <Route path="/clients" 
       render={ () => <AdminClients clients={props.state.clientsPage.clients} dispatch={props.dispatch} />} />
       <Route path="/products" 
       render={ () => <AdminProducts products={props.state.mainPage.products} 
       dispatch={props.dispatch} />} />
         <Route path="/2"
        render={ () => <MoreAboutProduct product={props.state.mainPage.products[1]} dispatch={props.dispatch} /> }  /> 
       <Footer></Footer>
     </div>
    
  );
}



export default App;

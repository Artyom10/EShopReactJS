import logo from './logo.svg';
import React from 'react';
import Nav from './Components/Navbar/Nav';
import Footer from './Components/Footer/Footer';
import MainPage from './Pages/MainPage';
import ClientProfile from './Pages/ClientProfile';
import ClientBag from './Pages/ClientBag';
import AdminClients from './Pages/AdminClients';
import AdminProducts from './Pages/AdminProducts'; 

import './App.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import { addProduct } from './redux/state';


const  App = (props) => {
  return (
    <BrowserRouter>
     <div>
       <Nav></Nav>
       <Route path="/main" 
       render={ () => <MainPage products={props.state.mainPage.products} brands={props.state.mainPage.brands} sliders={props.state.mainPage.sliders} stylesExample={props.state.mainPage.stylesData} />} addProduct={addProduct}/>
       <Route path="/profile" 
       render={ () => <ClientProfile />} />
       <Route path="/bag" 
       render={ () => <ClientBag bags={props.state.bagPage.bags} />} />
       <Route path="/clients" 
       render={ () => <AdminClients clients={props.state.clientsPage.clients}/>} />
       <Route path="/products" 
       render={ () => <AdminProducts products={props.state.mainPage.products} addProduct={props.addProduct}/>} />
       <Footer></Footer>
     </div>
    </BrowserRouter>
  );
}



export default App;

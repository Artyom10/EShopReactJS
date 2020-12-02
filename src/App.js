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
import MoreAboutProductContainer from './Components/Products/SeeMoreProduct/SeeMoreProductContainer';



const  App = (props) => {
  return (
     <div>
       <Nav></Nav>
       <Route path="/main" 
       render={ () => <MainPage  />}/>
       <Route path="/profile" 
       render={ () => <ClientProfile />} />
       <Route path="/bag" 
       render={ () => <ClientBag/>} />
       <Route path="/clients" 
       render={ () => <AdminClients  />} />
       <Route path="/products" 
       render={ () => <AdminProducts />} />
         <Route path="/2"
        render={ () => <MoreAboutProductContainer /> }  /> 
       <Footer></Footer>
     </div>
    
  );
}



export default App;

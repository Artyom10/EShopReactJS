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
import { BrowserRouter, Route } from 'react-router-dom';



const  App = (props) => {
  return (
    <BrowserRouter>
     <div>
       <Nav></Nav>
       <Route path="/main" component={MainPage}/>
       <Route path="/profile" component={ClientProfile}/>
       <Route path="/bag" component={ClientBag}/>
       <Route path="/clients" component={AdminClients}/>
       <Route path="/products" component={AdminProducts}/>
       <Footer></Footer>
     </div>
    </BrowserRouter>
  );
}



export default App;

import logo from './logo.svg';
import React from 'react';
import Nav from './Components/Navbar/Nav';
import Footer from './Components/Footer/Footer';

import './App.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import ProfileContainer from './Components/Profile/ProfileContainer';
import BagContainer from './Components/Bag/BagContainer';
import ClientsContainer from './Components/Clients/ClientsContainer';
import ProductListContainer from './Components/ProductsList/ProductsListContainer';
import ViewComponent from './Components/ViewComponent/ViewComponent';




const  App = (props) => {
  return (
     <div>
       <Nav></Nav>
       <Route exact path="/" 
       render={ () => <ViewComponent  />}/>
       <Route path="/profile" 
       render={ () => <ProfileContainer />} />
       <Route path="/bag" 
       render={ () => <BagContainer/>} />
       <Route path="/clients" 
       render={ () => <ClientsContainer  />} />
       <Route path="/products" 
       render={ () => <ProductListContainer />} />
       <Footer></Footer>
     </div>
    
  );
}



export default App;

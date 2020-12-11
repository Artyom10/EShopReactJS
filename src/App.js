import logo from './logo.svg';
import React from 'react';
import Footer from './Components/Footer/Footer';

import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import ClientsContainer from './Components/Clients/ClientsContainer';
import ViewComponent from './Components/ViewComponent/ViewComponent';
import LogIn from './Components/AuthComponent/LogIn/LogIn';
import SignUp from './Components/AuthComponent/SignUp/SignUp';
import Nav from './Components/Navbar/Nav';
import ProductList from './Components/ProductsList/ProductsList';
import Bag from './Components/Bag/Bag';
import ShowPoducts from './Components/Products/ShowPoducts';
import Profile from './Components/Profile/Profile';



const  App = (props) => {
  return (
     <div>
       <Nav />
       <Switch>
       <Route exact path="/" 
       render={ () => <ShowPoducts  />}/>
       <Route path="/profile" 
       render={ () => <Profile />} />
       <Route path="/bag" 
       render={ () => <Bag/>} />
       <Route path="/clients" 
       render={ () => <ClientsContainer  />} />
       <Route path="/products" 
       render={ () => <ProductList />} />
       <Route path="/log_in"
       render={ () => <LogIn />} />
       <Route path="/sign_up"
       render={ () => <SignUp />} />
       </Switch>
       <Footer />
     </div>
    
  );
}



export default App;

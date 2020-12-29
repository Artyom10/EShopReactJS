import logo from './logo.svg';
import React from 'react';
import Footer from './Components/Footer/Footer';

import stylesFor from  './App.module.css';
import { Route, Switch } from 'react-router-dom';
import ClientsContainer from './Components/Clients/ClientsContainer';
import RatedProductsContainer from './Components/RatedProducts/RatedProductsContainer';
import UserProductsContainer from './Components/UserProducts/UserProductsContainer';
import { connect, useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import ProfileContainer from './Components/Profile/ProfileContainer';
import LoginContainer from './Components/AuthComponent/LogIn/LoginContainer';
import SignUpContainer from './Components/AuthComponent/SignUp/SignUpContainer';
import ShowProductsContainer from './Components/Products/ShowProductsContainer';
import ProductListContainer from './Components/ProductsList/ProductListContainer';
import NavContainer from './Components/Navbar/NavContainer';
import BookedProductsContainer from './Components/BookedProducts/BookedProductsContainer';
import ShowBookedProductsContainer from './Components/ShowBookedProducts/ShowBookedProductsContainer';

function RoleProfile({children}){
  const isWho = useSelector(state => state.firebase.profile.isWho)
  if(!isLoaded(isWho)) return null;
  return children
}

const  App = (props) => {
  return (
    <div>
          <NavContainer />
      <div className={stylesFor.forFooter}>
   
    <Route exact path="/" 
    render={ () => <ShowProductsContainer  />}/>

    <RoleProfile>
    {props.isWho === 'admin'
    ?
    <>
    <Route path="/clients" 
    render={ () => <ClientsContainer  />} />
    <Route path="/products" 
    render={ () => <ProductListContainer />} />
   <Route path="/rating"
    render={ () => <RatedProductsContainer />} />
    <Route path="/booked"
    render={ () => <ShowBookedProductsContainer />} />
     </>
    :
    <>
    <Route path="/profile" 
    render={ () => <ProfileContainer />} />
    <Route path="/userProducts"
    render={ () => <UserProductsContainer /> } />
     <Route path="/userProductsBooked"
    render={ () => <BookedProductsContainer /> } />
    </>

    }
   </RoleProfile>

    <Route path="/log_in"
    render={ () => <LoginContainer />} />
    <Route path="/sign_up"
    render={ () => <SignUpContainer />} />
    
   </div> 
    <Footer className='footerMain' />
  </div>
    
  );
}

const mapStateToProps = (state) => {
  return {
    isWho: state.firebase.profile.isWho,
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps, {})(App);
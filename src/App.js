import logo from './logo.svg';
import React from 'react';
import Footer from './Components/Footer/Footer';

import './App.css';
import { Route, Switch } from 'react-router-dom';
import ClientsContainer from './Components/Clients/ClientsContainer';
import LogIn from './Components/AuthComponent/LogIn/LogIn';
import SignUp from './Components/AuthComponent/SignUp/SignUp';
import Nav from './Components/Navbar/Nav';
import ProductList from './Components/ProductsList/ProductsList';
import ShowPoducts from './Components/Products/ShowPoducts';
import RatedProductsContainer from './Components/RatedProducts/RatedProductsContainer';
import UserProductsContainer from './Components/UserProducts/UserProductsContainer';
import { connect, useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import ProfileContainer from './Components/Profile/ProfileContainer';

function RoleProfile({children}){
  const role = useSelector(state => state.firebase.profile.isAdmin)
  if(!isLoaded(role)) return null;
  return children
}

const  App = (props) => {
  return (
    <div>
    <Nav />
    <Switch>
    <Route exact path="/" 
    render={ () => <ShowPoducts  />}/>
  {/*  <RoleProfile>
{props.isAdmin ?
<> */}
    <Route path="/clients" 
    render={ () => <ClientsContainer  />} />
    <Route path="/products" 
    render={ () => <ProductList />} />
           <Route path="/rating"
    render={ () => <RatedProductsContainer />} />
   {/* <Route path="/productsd/:id"
    render={ () => <ProductDetails />} /> */}
   {/* </>
    :
   <>*/}
    <Route path="/profile" 
    render={ () => <ProfileContainer />} />
       <Route path="/userProducts"
    render={ () => <UserProductsContainer /> } />
   {/*  </>
     }
    </RoleProfile> */}
    <Route path="/log_in"
    render={ () => <LogIn />} />
    <Route path="/sign_up"
    render={ () => <SignUp />} />
    </Switch>
    <Footer />
  </div>
    
  );
}

const mapStateToProps = (state) => {
  return {
    isAdmin: state.firebase.profile.isAdmin,
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps, {})(App);

//export default App;

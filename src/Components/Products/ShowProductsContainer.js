/*import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowProducts from './ShowPoducts';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';


class ShowProductsContainer extends Component{
    render(){
        return(
          <ShowProducts />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.firestore.ordered.products || state.productPages.products,
        auth: state.firebase.auth
    }
 }

 const mapDispatchToProps = (dispatch) => {
     return {
    
     }
 }

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        { collection: 'products'}
    ])
)(ShowProducts)*/
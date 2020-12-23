import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { removeProduct } from '../../redux/actions/productActions';
import { editProduct } from '../../redux/actions/productActions';
import ProductList from './ProductsList';


const mapStateToProps = (state) => {
    return {
        products: state.firestore.ordered.products || state.productPages.products,
        auth: state.firebase.auth,
        users: state.firestore.ordered.users || [],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      removeProduct: (targetDeleteProduct) => dispatch(removeProduct(targetDeleteProduct)),
      editProduct: (targetEditProduct, newData) => dispatch(editProduct(targetEditProduct, newData)),
    
    }
  }

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        { collection: 'products'},
        {collection: 'users'}
    ])
)(ProductList)
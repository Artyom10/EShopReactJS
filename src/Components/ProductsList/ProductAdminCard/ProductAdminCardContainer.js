import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import ProductAdminCard from './ProductAdminCard';
import { editProduct, removeProduct } from '../../../redux/actions/productActions';


const mapStateToProps = (state) => {
    return {
        products: state.firestore.ordered.products || state.productPages.products,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      removeProduct: (targetDeleteProduct) => dispatch(removeProduct(targetDeleteProduct)),
      editProduct: (targetEditProduct, newData) => dispatch(editProduct(targetEditProduct, newData)),
    
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(ProductAdminCard);
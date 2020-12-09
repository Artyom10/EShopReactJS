import React, { Component } from 'react';
import ProductAdminCard from './ProductAdminCard/ProductAdminCard';
import AddProduct from './AddProduct/AddProduct';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { removeProduct } from '../../redux/reducers/productPagesReducer';
import { editProduct } from '../../redux/actions/productActions';



class ProductList extends Component{
    render(){
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to='/log_in' />
        return(
            <div className="container">
             <AddProduct />
            <div className="row"> 
             {  <ProductAdminCard products={this.props.products} removeProduct={this.props.removeProduct} 
             editProduct={this.props.editProduct} />} 
            </div>
            
         </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.firestore.ordered.products || state.productPages.products,
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      removeProduct: (targetDeleteProduct) => dispatch(removeProduct(targetDeleteProduct)),
      editProduct: (targetEditProduct) => dispatch(editProduct(targetEditProduct)),
    }
  }

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        { collection: 'products'}
    ])
)(ProductList)
import React, { Component } from 'react';
import ProductAdminCard from './ProductAdminCard/ProductAdminCard';
import AddProduct from './AddProduct/AddProduct';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { removeProduct } from '../../redux/actions/productActions';
import { editProduct } from '../../redux/actions/productActions';



class ProductList extends Component{
    state = {
        photo: '',
        producer: '',
        price: '',
        type: '',
        sizes: '',
        tags: '',
      }
    
      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
    
      /*handleEdit = (e) => {
        e.preventDefault();
          this.setState({
          [e.target.id]: e.target.value
          })
        this.props.editProduct(this.state);
      }*/
      
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNewProduct(this.state);
      }
    
    handleEditSubmit = (productId) => {
      //e.preventDefault();
      console.log(this.state);
      console.log(productId);
     this.props.editProduct(productId,this.state);
     this.setState({
        photo: '',
        producer: '',
        price: '',
        type: '',
        sizes: '',
        tags: '',
    })
    } 


    render(){
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to='/log_in' />
        return(
            <div className="container">
             <AddProduct />
            <div className="row"> 
             {  <ProductAdminCard products={this.props.products} removeProduct={this.props.removeProduct} 
              handleSubmit={this.handleSubmit} handleEditSubmit={this.handleEditSubmit}  handleChange={this.handleChange}/>} 
            </div>
            
         </div>
        );
    }
}

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
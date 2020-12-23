import React, { Component, useState } from 'react';
import ProductAdminCard from './ProductAdminCard/ProductAdminCard';
import { Redirect } from 'react-router-dom';
import AddProductContainer from './AddProduct/AddProductContainer';




class ProductList extends Component{
    state = {
        photo: '',
        producer: '',
        price: '',
        type: '',
        size: '',
        tags: '',
      }
    
      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
          
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNewProduct(this.state);
      }
    
    handleEditSubmit = (productId) => {
      console.log(this.state);
      console.log(productId);
     this.props.editProduct(productId,this.state);
     this.setState({
        photo: '',
        producer: '',
        price: '',
        type: '',
        size: '',
        tags: '',
    })
    } 


    render(){
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to='/log_in' />
        return(
            <div className="container">
             <AddProductContainer />
            <div className="row"> 
             {  <ProductAdminCard products={this.props.products} removeProduct={this.props.removeProduct} 
              handleSubmit={this.handleSubmit} handleEditSubmit={this.handleEditSubmit}  handleChange={this.handleChange}
              addNewProduct={this.props.addNewProduct} editProduct={this.props.editProduct}/>} 
            </div>
            
         </div>
        );
    }
}

export default ProductList;




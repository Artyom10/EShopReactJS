import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import stylesFor from './ProductAdminCard.module.css';
import generalStyles from '../GeneralStyles.module.css';
import { connect } from 'react-redux';
import { editProduct, removeProduct } from '../../../redux/actions/productActions';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';

/*



ProductAdminCard.propTypes = {
  product: PropTypes.object.isRequired,
  urlPhoto: PropTypes.string,
  price: PropTypes.string,
  producer: PropTypes.string,
  type: PropTypes.string,
  sizes: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.string
}*/
/*
class ProductAdminCard extends Component{
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


  

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewProduct(this.state);
  }

handleEditSubmit = (productId) => {
  //e.preventDefault();
  console.log(this.state);
  console.log(productId);
 this.props.editProduct(productId,this.state);
} 

  
  

  render(){
    return(
      this.props.products.map(product => 
        <div className={`col d-md-flex ${stylesFor.colInContainer}`} key={product.id}>
        <div className={`card mb-3 ${stylesFor.cardStyle}`}>
          <div className="row no-gutters justify-content-center">
            <div className="col-md-6">
              <img src={product.photo} className={`card-img ${stylesFor.insideCard}`} alt={product.type} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Main information</h5>
                <ul className="list-group">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label for="price">Photo</label>
                      <input className="form-control" type="text" id="photo" placeholder={product.photo} onChange={this.handleChange}/>
                      <label for="price">Price</label>
                      <input className="form-control" type="text" id="price" placeholder={product.price} onChange={this.handleChange}/>
                      <label for="producer">Producer</label>
                      <input type="text" className="form-control" id="producer" placeholder={product.producer} onChange={this.handleChange}  />
                      <label for="type">Type</label>
                      <input type="text" className="form-control" id="type" placeholder={product.type}  onChange={this.handleChange} />
                      <label for="sizes">Sizes</label>
                      <input className="form-control" type="text" id="sizes" placeholder={product.sizes}  onChange={this.handleChange}  />
                      <label for="tags">Tags</label>
                      <input type="text" className="form-control" id="tags" placeholder={product.tags} onChange={this.handleChange} />
                    </div>
                </form>
                  <li className="list-group-item">
                  <div className="row justify-content-center">
                    <div className="col">
                      <button className={`btn ${generalStyles.generalButton} ${stylesFor.editButton}`} onClick={() => (this.handleEditSubmit(product.id))}>Edit product</button>
                    </div>
                    <div className="col">
                      <button className={`btn ${generalStyles.generalButton} ${stylesFor.deleteButton}`} onClick={() => (this.props.removeProduct(product.id))} >Delete product</button>
                    </div>
                  </div>
                </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
       
    );
  }
    
}
*/
/*const mapStateToProps = (state) => {
  return {
    products: state.productPages.products,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (targetDeleteProduct) => dispatch(removeProduct(targetDeleteProduct)),
    editProduct: (targetEditProduct) => dispatch(editProduct(targetEditProduct)),
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductAdminCard);*/


const ProductAdminCard = (props) => {
  return(
  props.products.map(product => 
    <div className={`col d-md-flex ${stylesFor.colInContainer}`} key={product.id}>
    <div className={`card mb-3 ${stylesFor.cardStyle}`}>
      <div className="row no-gutters justify-content-center">
        <div className="col-md-6">
          <img src={product.photo} className={`card-img ${stylesFor.insideCard}`} alt={product.type} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Main information</h5>
            <ul className="list-group">
              <form onSubmit={props.handleSubmit}>
                <div className="form-group">
                <label for="price">Photo</label>
                  <input className="form-control" type="text" id="photo" placeholder={product.photo} onChange={props.handleChange}/>
                  <label for="price">Price</label>
                  <input className="form-control" type="text" id="price" placeholder={product.price} onChange={props.handleChange}/>
                  <label for="producer">Producer</label>
                  <input type="text" className="form-control" id="producer" placeholder={product.producer} onChange={props.handleChange}  />
                  <label for="type">Type</label>
                  <input type="text" className="form-control" id="type" placeholder={product.type}  onChange={props.handleChange} />
                  <label for="sizes">Sizes</label>
                  <input className="form-control" type="text" id="sizes" placeholder={product.sizes}  onChange={props.handleChange}  />
                  <label for="tags">Tags</label>
                  <input type="text" className="form-control" id="tags" placeholder={product.tags} onChange={props.handleChange} />
                </div>
            </form>
              <li className="list-group-item">
              <div className="row justify-content-center">
                <div className="col">
                  <button className={`btn ${generalStyles.generalButton} ${stylesFor.editButton}`} onClick={() => (props.handleEditSubmit(product.id))}>Edit product</button>
                </div>
                <div className="col">
                  <button className={`btn ${generalStyles.generalButton} ${stylesFor.deleteButton}`} onClick={() => (props.removeProduct(product.id))} >Delete product</button>
                </div>
              </div>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
    );
}


export default ProductAdminCard;


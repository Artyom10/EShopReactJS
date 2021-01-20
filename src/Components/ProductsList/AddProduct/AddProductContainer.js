import React from 'react';
import {addNewProduct} from '../../../redux/actions/productActions';
import {connect} from 'react-redux';
import AddProduct from './AddProduct';

const mapStateToProps = (state) => {
 return {
   
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewProduct: (newProduct) => dispatch(addNewProduct(newProduct))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddProduct);
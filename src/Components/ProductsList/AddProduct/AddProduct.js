import { checkPropTypes } from 'prop-types';
import React from 'react';
import stylesFor from './AddProduct.module.css';
import generalStyles from '../GeneralStyles.module.css';
import {addNewProduct} from '../../../redux/actions/productActions';
import {connect} from 'react-redux';
import AddProductButton from '../AddPoductButton/AddProductButton';

class AddProduct extends React.Component{
  state = {
     id: '',
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
    this.setState({
      id: '',
      photo: '',
      producer: '',
      price: '',
      type: '',
      sizes: '',
      tags: '',
  })
  }

  render(){
    return (
      <div className="container">
      <div className="row  justify-content-center">
        <div class="col-md-5">
      <div className="align-items-center">
       <div className={`${stylesFor.loginContainer} d-flex  align-items-center justify-content-center`}>
         <form onSubmit={this.handleSubmit} className={`${stylesFor.loginForm} text-center`}>
           <h1 className="mb-5 font-weight-light text-uppercase">Add new product</h1>
           <div className="form-group">
             <input type="text" class={`form-control rounded-pill form-control-lg
              ${stylesFor.control}`}
              placeholder="id" onChange={this.handleChange} id="id"/>
           </div>
           <div className="form-group">
            <input type="text" className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
            placeholder="photo" onChange={this.handleChange} id="photo" />
          </div>
          <div className="form-group">
            <input type="text" className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
            placeholder="producer" onChange={this.handleChange} id="producer" />
          </div>
          <div className="form-group">
            <input type="text" className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
            placeholder="type" onChange={this.handleChange} id="type" />
          </div>
          <div className="form-group">
            <input type="text" className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
            placeholder="price" onChange={this.handleChange} id="price" />
          </div>
          <div className="form-group">
            <input type="text" className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
            placeholder="sizes" onChange={this.handleChange} id="sizes" />
          </div>
          <div className="form-group">
            <input type="text" className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
            placeholder="tags" onChange={this.handleChange} id="tags" />
          </div>
           <AddProductButton />
        </form>
       </div>
      </div>
      </div>
    </div>
  </div>
    );
  }
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewProduct: (newProduct) => dispatch(addNewProduct(newProduct))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddProduct);
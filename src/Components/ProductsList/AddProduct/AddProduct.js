import React, { useState } from 'react';
import stylesFor from './AddProduct.module.css';
import AddProductButton from '../AddPoductButton/AddProductButton';


const AddProduct = (props) => {

  const [newProduct, setNewProduct] = useState({
    photo: '',
    price: '',
    producer: '',
    type: '',
    size: '',
    tags: '',
    description: '',
    rated: [],
  });

  const handleChange = (e) => {
    e.preventDefault();
    setNewProduct({
      ...newProduct,
      [e.target.id]: e.target.value
    });
  };

  

 const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewProduct(newProduct);
    setNewProduct({
      photo: '',
      producer: '',
      price: '',
      type: '',
      size: '',
      tags: '',
      description: '',
  });
};

    return (
      <div className="container">
      <div className="row  justify-content-center">
        <div className="col-md-5">
      <div className="align-items-center">
       <div className={`${stylesFor.loginContainer} d-flex  align-items-center justify-content-center`}>
         <form onSubmit={handleSubmit} className={`${stylesFor.loginForm} text-center`}>
           <h1 className="mb-5 font-weight-light text-uppercase">Add new product</h1>
           <div className="form-group">
            <input type="text" className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
            placeholder="photo" onChange={handleChange} id="photo" value={newProduct.photo} />
          </div>
          <div className="form-group">
            <input type="text" className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
            placeholder="producer" onChange={handleChange} id="producer" value={newProduct.producer} />
          </div>
          <div className="form-group">
            <input type="text" className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
            placeholder="type" onChange={handleChange} id="type" value={newProduct.type} />
          </div>
          <div className="form-group">
            <input type="text" className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
            placeholder="price" onChange={handleChange} id="price" value={newProduct.price} />
          </div>
          <div className="form-group">
            <input type="text" className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
            placeholder="size" onChange={handleChange} id="size" value={newProduct.size}/>
          </div>
          <div className="form-group">
            <input type="text" className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
            placeholder="tags" onChange={handleChange} id="tags" value={newProduct.tags} />
          </div>
          <div className="form-group">
            <input type="text" className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
            placeholder="description" onChange={handleChange} id="description" value={newProduct.description} />
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

export default AddProduct;
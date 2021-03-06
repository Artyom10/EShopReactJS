import React, { useState } from "react";
import stylesFor from "./ProductAdminCard.module.css";
import generalStyles from "../GeneralStyles.module.css";

const ProductAdminCard = (props) => {
  let [changedProduct, setChangedProduct] = useState({
   // photo: "",
   photo: null,
    price: "",
    producer: "",
    type: "",
    size: "",
    tags: "",
    description: "",
  });

  let [allowEdit, setAllowEdit] = useState(false);
  let [productId, setProductId] = useState('');

  const changeAllowEdit = (product) => {
    setProductId(product.id);
    setAllowEdit(!allowEdit);
    setChangedProduct({
      photo: product.photo,
      producer: product.producer,
      price: product.price,
      type: product.type,
      size: product.size,
      tags: product.tags,
      description: product.description,
    });
  };

  const turnOfAllowEdit = (product) => {
    setAllowEdit(false);
    setChangedProduct({
      photo: product.photo,
      producer: product.producer,
      price: product.price,
      type: product.type,
      size: product.size,
      tags: product.tags,
      description: product.description,
    });
  }

  const handleChange = (e) => {
    e.preventDefault();
   if(e.target.id === 'photo'){
     setChangedProduct({
       ...changedProduct,
       [e.target.id]: e.target.files[0],
     })
   }
   else{
     setChangedProduct({
       ...changedProduct,
       [e.target.id]: e.target.value
     })
   }
  };

  const handleEdit = () => {
    debugger;
    props.editProduct(productId, changedProduct);
    setChangedProduct({
     // photo: "",
     photo: null,
      producer: "",
      price: "",
      type: "",
      size: "",
      tags: "",
      description: "",
    });
    setProductId("");
    setAllowEdit(false);
  };

  return props.products.map((product) => (
    <div
      className={`col d-md-flex ${stylesFor.colInContainer}`}
      key={product.id}
    >
      <div className={`card mb-3 ${stylesFor.cardStyle}`}>
        <div className="row no-gutters justify-content-center">
          <div className="col-md-6">
            <img
              src={product.photo}
              className={`card-img ${stylesFor.insideCard}`}
              alt={product.type}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              {product.isBought 
              ?
              <div className="alert alert-info" role="alert">
                Clothes already sold
              </div>
              : null}
              <h5 className="card-title">Main information</h5>
              <ul className="list-group">
                <form>
                  <div className="form-group">
                    {
                    productId === product.id
                    ?
                    allowEdit ? (
                      <>
                    <div className=' row justify-content-center'>
                    <label className='btn'>
                      Photo
                      <input type='file' className={generalStyles.setPhoto}
                      id='photo' onChange={handleChange} />
                    </label>
                    </div>
                        <label htmlFor="price">Price</label>
                        <input
                          className="form-control"
                          type="text"
                          id="price"
                          onChange={handleChange}
                          value={changedProduct.price}
                        />
                        <label htmlFor="producer">Producer</label>
                        <input
                          type="text"
                          className="form-control"
                          id="producer"
                          onChange={handleChange}
                          value={changedProduct.producer}
                        
                        />
                        <label htmlFor="type">Type</label>
                        <input
                          type="text"
                          className="form-control"
                          id="type"
                          onChange={handleChange}
                          value={changedProduct.type}
                         
                        />
                        <label htmlFor="size">Size</label>
                        <input
                          className="form-control"
                          type="text"
                          id="size"
                          onChange={handleChange}
                          value={changedProduct.size}
                          
                        />
                        <label htmlFor="tags">Tags</label>
                        <input
                          type="text"
                          className="form-control"
                          id="tags"
                          onChange={handleChange}
                          value={changedProduct.tags}
                        />
                        <label htmlFor="description">Description</label>
                        <input
                          type="text"
                          className="form-control"
                          id="description"
                          onChange={handleChange}
                          value={changedProduct.description}
                        />
                      </>
                    ) : null 
                  : null}
                  </div>
                </form>

                <li className="list-group-item">
                  <div className="row justify-content-center">
                    <div className="col">
                      {productId === product.id ?  
                      allowEdit
                      ? <button
                      className={`btn ${generalStyles.generalButton} ${stylesFor.editButton}`}
                      onClick={() => handleEdit(product.id, product)}
                    >
                      Edit product
                    </button>
                    : null
                  : null}
                      
                    </div>
                    <div className="col">
                      <button
                        className={`btn ${generalStyles.generalButton} ${stylesFor.deleteButton}`}
                        onClick={() => props.removeProduct(product.id)}
                      >
                        Delete product
                      </button>
                    </div>
                    <div className="col">
                      { productId === product.id ?
                        allowEdit
                        ?  <button
                        className={`btn ${generalStyles.generalButton} ${stylesFor.deleteButton}`}
                        onClick={() => {
                          turnOfAllowEdit(product);
                        }}
                      >
                        Cancel edit
                      </button>
                        : 
                      
                        <button
                        className={`btn ${generalStyles.generalButton} ${stylesFor.allowButton}`}
                        onClick={() => {
                          changeAllowEdit(product);
                        }}
                      >
                        Allow edit
                      </button>
                      : 
                      <>
                      <button
                        className={`btn ${generalStyles.generalButton} ${stylesFor.allowButton}`}
                        onClick={() => {
                          changeAllowEdit(product);
                        }}
                      >
                        Allow edit
                      </button>
                      </>}
                     
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default ProductAdminCard;
                 
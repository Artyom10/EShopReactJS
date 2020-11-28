import { checkPropTypes } from 'prop-types';
import React from 'react';
import ProductAdminCard from '../ProductAdminCard/ProductAdminCard';
import {addProductActionCreator,updateProductActionCreator} from '../../../redux/state';


function ModalAddProduct(props) {
    const urlPhoto = 'https://sun9-56.userapi.com/impg/46d6OEAguHzOvhD8gFvtuaKJpgbB2HdpCrR2wQ/rXhMbv1AJnE.jpg?size=800x800&quality=96&proxy=1&sign=1c6396244ef85dbe1ab426308018ddca';
    let setPrice = React.createRef();
    let setProducer = React.createRef();
    let setType = React.createRef();
    let setSizes = React.createRef();
    let setDescription = React.createRef();
    let setTags = React.createRef();
    let setPhoto = React.createRef();

    const addProduct = () => {
      
     props.dispatch(addProductActionCreator());
     setPrice.current.value = '';
     setProducer.current.value = '';
     setType.current.value = '';
     setSizes.current.value = '';
     setDescription.current.value = '';
     setTags.current.value = '';
    }

    const updateProduct = () => {
      const data = {
        id: 9,
        "urlPhoto": urlPhoto,
        "price": `${setPrice.current.value}`,
        "producer": `${setProducer.current.value}`,
        "type": `${setType.current.value}`,
        "sizes": `${setSizes.current.value}`,
        "description": `${setDescription.current.value}`,
        "tags": `${setTags.current.value}`
      };
     let action = updateProductActionCreator(data)
      props.dispatch(action);
    }

    return (
    <div className="modal fade" id="addProduct" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row justify-content-center">
                  <div className="col-md-6 text-center">
                    <figure className="figure">
                        <img src={urlPhoto} className="figure-img img-fluid rounded profile-img" alt="photo" />
                      </figure>
                  </div>
              </div>
              <div className="row justify-content-center">
                  <div className="col-md-6">
                    <form>
                        <div className="form-group">
                         <label for="photo">Url photo</label>
                          <input className="form-control" type="text" id="photo" placeholder="URL" ref={setPhoto} onChange={updateProduct} value={props.newProductObject.urlPhoto}/>
                          <label for="price">Price</label>
                          <input className="form-control" type="text" id="price" placeholder="Enter price" ref={setPrice} onChange={updateProduct} value={props.newProductObject.price} />
                          <label for="producer">Producer</label>
                          <input type="text" className="form-control" id="producer" placeholder="Enter producer" ref={setProducer} onChange={updateProduct} value={props.newProductObject.producer}/>
                          <label for="type">Type</label>
                          <input type="text" className="form-control" id="type" placeholder="Enter type" ref={setType} onChange={updateProduct} value={props.newProductObject.type}/>
                          <label for="sizes">Sizes</label>
                          <input className="form-control" type="text" id="sizes" placeholder="Enter sizes(use ',')" ref={setSizes} onChange={updateProduct} value={props.newProductObject.sizes}/>
                          <label for="description">Description</label>
                          <textarea className="form-control" id="description" rows="3" ref={setDescription} onChange={updateProduct} value={props.newProductObject.description} ></textarea>
                          <label for="tags">Tags</label>
                          <input type="text" className="form-control" id="tags" placeholder="Enter tags" ref={setTags} onChange={updateProduct} value={props.newProductObject.tags} />
                        </div>
                    </form>
                  </div>
              </div>
              <div className="row justify-content-center">
                  <div className="col-md-6">
                    <button className="btn general-button add-button-modal btn-block" onClick={addProduct}>Add product</button>
                    <button className="btn general-button delete-button btn-block" data-dismiss="modal">Canel</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAddProduct;
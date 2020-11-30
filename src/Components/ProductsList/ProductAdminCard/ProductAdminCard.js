import React from 'react';
import PropTypes from 'prop-types';
import {removeProductActionCreator} from '../../../redux/productPages-reducer';
import {editProductActionCreator} from '../../../redux/productPages-reducer';
import {updateProductInListActionCreator} from '../../../redux/productPages-reducer';

const stylesForAdminCard = {
    cardStyle: {
        maxWidth: '540px'
    },

    colInContainer: {
        flex: '1 0 50%',
        paddingTop: '12px',
        paddingBottom: '12px'
    }
}

function ProductAdminCard(props) {
   //const {product} = props; 
  //const {id,urlPhoto, price, producer, type, sizes, description, tags} = product;

  let setPrice = React.createRef();
  let setProducer = React.createRef();
  let setType = React.createRef();
  let setSizes = React.createRef();
  let setDescription = React.createRef();
  let setTags = React.createRef();
  let setId = React.createRef();
 

  

  /*const removeProduct = () => {
    const data = {
      id: id,
      "urlPhoto": urlPhoto,
      "price": `${setPrice.current.value}`,
      "producer": `${setProducer.current.value}`,
      "type": `${setType.current.value}`,
      "sizes": `${setSizes.current.value}`,
      "description": `${setDescription.current.value}`,
      "tags": `${setTags.current.value}`
    }
  let action = removeProductActionCreator(data);
  props.dispatch(action);
  }*/

  /*const editProductAdmin = () => {
    const data = {
      id: id,
      "price": `${setPrice.current.value}`,
      "producer": `${setProducer.current.value}`,
      "type": `${setType.current.value}`,
      "sizes": `${setSizes.current.value}`,
      "description": `${setDescription.current.value}`,
      "tags": `${setTags.current.value}`
    }
    let action = editProductActionCreator();
   props.dispatch(action);
  }*/

  const changeProduct = () => {
    const data = {
       id: setId.current.value,
      "price": `${setPrice.current.value}`,
      "producer": `${setProducer.current.value}`,
      "type": `${setType.current.value}`,
      "sizes": `${setSizes.current.value}`,
      "description": `${setDescription.current.value}`,
      "tags": `${setTags.current.value}`
    };
   // let action = updateProductInListActionCreator(data);
  // props.dispatch(action);
   props.changeProduct(data);
  }



   return (
     props.products.map(product => 
      <div className="col d-md-flex" style={stylesForAdminCard.colInContainer} key={product.id}>
    <div className="card mb-3" style={stylesForAdminCard.cardStyle}>
      <div className="row no-gutters justify-content-center">
        <div className="col-md-6">
          <img src={product.urlPhoto} className="card-img" alt={product.type} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Main information</h5>
            <ul className="list-group">
              <form>
                <div className="form-group">
                <label for="price">id</label>
                  <input className="form-control" type="text" id="id" placeholder={product.id} ref={setId} onChange={changeProduct} value={props.changedProductObject.id}/>
                  <label for="price">Price</label>
                  <input className="form-control" type="text" id="price" placeholder={product.price} ref={setPrice} onChange={changeProduct} value={props.changedProductObject.price}/>
                  <label for="producer">Producer</label>
                  <input type="text" className="form-control" id="producer" placeholder={product.producer} ref={setProducer} onChange={changeProduct} value={props.changedProductObject.producer}/>
                  <label for="type">Type</label>
                  <input type="text" className="form-control" id="type" placeholder={product.type} ref={setType} onChange={changeProduct} value={props.changedProductObject.type}/>
                  <label for="sizes">Sizes</label>
                  <input className="form-control" type="text" id="sizes" placeholder={product.sizes} ref={setSizes} onChange={changeProduct} value={props.changedProductObject.sizes} />
                  <label for="description">Description</label>
                  <textarea className="form-control" id="description" rows="3" ref={setDescription} onChange={changeProduct} value={props.changedProductObject.description}>{product.description}</textarea>
                  <label for="tags">Tags</label>
                  <input type="text" className="form-control" id="tags" placeholder={product.tags} ref={setTags} onChange={changeProduct} value={props.changedProductObject.tags}/>
                </div>
            </form>
              <li className="list-group-item">
              <div className="row justify-content-center">
                <div className="col">
                  <button className="btn general-button edit-button" onClick={() => (props.editProductAdmin(product.id))}>Edit product</button>
                </div>
                <div className="col">
                  <button className="btn general-button delete-button" onClick={() => (props.removeProduct(product.id))} >Delete product</button>
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

ProductAdminCard.propTypes = {
  product: PropTypes.object.isRequired,
  urlPhoto: PropTypes.string,
  price: PropTypes.string,
  producer: PropTypes.string,
  type: PropTypes.string,
  sizes: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.string
}

export default ProductAdminCard;

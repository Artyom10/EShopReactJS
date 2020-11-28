import React from 'react';
import PropTypes from 'prop-types';

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
   const {product} = props; 
  const {id,urlPhoto, price, producer, type, sizes, description, tags} = product;

  let setPrice = React.createRef();
  let setProducer = React.createRef();
  let setType = React.createRef();
  let setSizes = React.createRef();
  let setDescription = React.createRef();
  let setTags = React.createRef();
 

  const editProduct = () => {
    props.dispatch({type: 'EDIT-PRODUCT'})
  }

  const updateAdminProduct = () => {
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
    props.dispatch({type: 'UPDATE-PRODUCT', updatedProduct: data })    
  }



   return (
    <div className="col d-md-flex" style={stylesForAdminCard.colInContainer}>
    <div className="card mb-3" style={stylesForAdminCard.cardStyle}>
      <div className="row no-gutters justify-content-center">
        <div className="col-md-6">
          <img src={urlPhoto} className="card-img" alt={type} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Main information</h5>
            <ul className="list-group">
              <form>
                <div className="form-group">
                  <label for="price">Price</label>
                  <input className="form-control" type="text" id="price" value={price} ref={setPrice} onChange={updateAdminProduct}/>
                  <label for="producer">Producer</label>
                  <input type="text" className="form-control" id="producer" value={producer} ref={setProducer} onChange={updateAdminProduct}/>
                  <label for="type">Type</label>
                  <input type="text" className="form-control" id="type" value={type} ref={setType} onChange={updateAdminProduct}/>
                  <label for="sizes">Sizes</label>
                  <input className="form-control" type="text" id="sizes" value={sizes} ref={setSizes} onChange={updateAdminProduct} />
                  <label for="description">Description</label>
                  <textarea className="form-control" id="description" rows="3" ref={setDescription} onChange={updateAdminProduct}>{description}</textarea>
                  <label for="tags">Tags</label>
                  <input type="text" className="form-control" id="tags" value={tags} ref={setTags} onChange={updateAdminProduct}/>
                </div>
            </form>
              <li className="list-group-item">
              <div className="row justify-content-center">
                <div className="col">
                  <button className="btn general-button edit-button" onClick={editProduct}>Edit product</button>
                </div>
                <div className="col">
                  <button className="btn general-button delete-button" >Delete product</button>
                </div>
              </div>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
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

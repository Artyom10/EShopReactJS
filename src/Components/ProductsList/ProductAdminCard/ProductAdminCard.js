import React from 'react';

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
  return (
    <div className="col d-md-flex" style={stylesForAdminCard.colInContainer}>
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
                  <label for="price">Price</label>
                  <input className="form-control" type="text" id="price" value={product.price} />
                  <label for="producer">Producer</label>
                  <input type="text" className="form-control" id="producer" value={product.producer} />
                  <label for="type">Type</label>
                  <input type="text" className="form-control" id="type" value={product.type} />
                  <label for="sizes">Sizes</label>
                  <input className="form-control" type="text" id="sizes" value={product.sizes} />
                  <label for="description">Description</label>
                  <textarea className="form-control" id="description" rows="3">{product.description}</textarea>
                  <label for="tags">Tags</label>
                  <input type="text" className="form-control" id="tags" value={product.tags} />
                </div>
            </form>
              <li className="list-group-item">
              <div className="row justify-content-center">
                <div className="col">
                  <button className="btn general-button edit-button">Edit product</button>
                </div>
                <div className="col">
                  <button className="btn general-button delete-button">Delete product</button>
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

export default ProductAdminCard;

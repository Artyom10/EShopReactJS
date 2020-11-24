import React from 'react';

const stylesForBag = {
  cardStyle: {
      maxWidth: '540px'
  }
}

function Person(props) {
  const {product} = props;
  return (
    <div className="row justify-content-between bag-thing border align-items-center">
    <div className="col-4 mr-auto">
      <div className="card mb-3 border-0" style={stylesForBag.cardStyle}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={product.urlPhoto} className="card-img" alt={product.type} />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">
                {product.producer} /
                 <span class="product-identificator">{product.type}</span>
              </h5>
              <p class="card-text card-text-inside">Price: {product.price}</p>
              <p class="card-text card-text-inside">Size: S</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-auto">
      <span className="hidden-button"
        ><button className="btn btn-danger badge-pill">Remove</button></span>
    </div>
  </div>
  );
}

export default Person;

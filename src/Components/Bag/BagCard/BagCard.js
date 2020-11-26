import React from 'react';
import PropTypes from 'prop-types';

const stylesForBag = {
  cardStyle: {
      maxWidth: '540px'
  }
}

function Person(props) {
  const {bagItem} = props;
  const {urlPhoto, price, producer, type, sizes, description, tags} = bagItem;
  return (
    <div className="row justify-content-between bag-thing border align-items-center">
    <div className="col-4 mr-auto">
      <div className="card mb-3 border-0" style={stylesForBag.cardStyle}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={urlPhoto} className="card-img" alt={type} />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">
                {producer} /
                 <span class="product-identificator">{type}</span>
              </h5>
              <p class="card-text card-text-inside">Price: {price}$</p>
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

Person.propTypes = {
  product: PropTypes.object.isRequired,
  urlPhoto: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  producer: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default Person;

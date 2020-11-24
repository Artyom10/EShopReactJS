import React from 'react';
import PropTypes from 'prop-types';
import ProductRating from './ProductRating/ProductRating';


function ProductCard(props) {
    const {product} = props; 
    const {urlPhoto, price, producer, type, sizes, description, tags} = product;
  return (
    <div className="col d-md-flex">
        <div className="card  product-card">
          <div className="inner"> <img src={urlPhoto} className="card-img-top ihv" alt={type} /></div>
          <div className="card-body">
             <h5 className="price-card">{price}</h5>
        <p className="card-text">{producer}/ <span className="product-identificator">{type}</span></p>
          <span className="available-sizes">Sizes: <span><strong>{sizes}</strong></span></span>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><a href="#" className="btn add-bag-button" type="button" data-toggle="modal" data-target="#seeMore">See more</a></li>
              <li className="list-group-item">
               <ProductRating />
              </li>
            </ul>
            
          </div>
        </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  price: PropTypes.string.isRequired,
  producer: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  urlPhoto: PropTypes.string.isRequired
}

export default ProductCard;

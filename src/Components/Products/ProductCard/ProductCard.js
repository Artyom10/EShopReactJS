import React from 'react';
import PropTypes from 'prop-types';
import ProductRating from './ProductRating/ProductRating';
import { NavLink } from 'react-router-dom';

function ProductCard(props) {
    const {product} = props; 
    const {urlPhoto, price, producer, type, sizes, description, tags, id} = product;
    const router = `/main/${id}`;
  return (
    <div className="col d-md-flex">
        <div className="card  product-card">
          <div className="inner"> <img src={urlPhoto} className="card-img-top ihv" alt={type} /></div>
          <div className="card-body">
             <h5 className="price-card">{price}</h5>
        <p className="card-text">{producer}/ <span className="product-identificator">{type}</span></p>
          <span className="available-sizes">Sizes: <span><strong>{sizes}</strong></span></span>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><NavLink to={router} className="btn add-bag-button" type="button" data-toggle="modal" data-target="#seeMore">See more</NavLink></li>
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

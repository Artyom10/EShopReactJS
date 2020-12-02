import React from 'react';
import PropTypes from 'prop-types';
import ProductRating from './ProductRating/ProductRating';
import { NavLink } from 'react-router-dom';

function ProductCard(props) {
   /*const {product} = props; 
    const {urlPhoto, price, producer, type, sizes, description, tags, id} = product;
    const router = `${id}`;*/
  return (
    props.products.map(product => 
      <div className="col d-md-flex" key={product.id}>
      <div className="card  product-card">
        <div className="inner"> <img src={product.urlPhoto} className="card-img-top ihv" alt={product.type} /></div>
        <div className="card-body">
           <h5 className="price-card">{product.price}$</h5>
      <p className="card-text">{product.producer}/ <span className="product-identificator">{product.type}</span></p>
        <span className="available-sizes">Sizes: <span><strong>{product.sizes}</strong></span></span>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><NavLink to={2} className="btn add-bag-button" type="button" data-toggle="modal" data-target="#seeMore">See more</NavLink></li>
            <li className="list-group-item">
             <ProductRating />
            </li>
          </ul>
          
        </div>
      </div>
  </div>
      )
   
  );
}
/*
ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  price: PropTypes.string.isRequired,
  producer: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  urlPhoto: PropTypes.string.isRequired
}*/

export default ProductCard;

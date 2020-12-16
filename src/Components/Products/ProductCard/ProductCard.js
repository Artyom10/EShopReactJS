import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductRating from './ProductRating/ProductRating';
import stylesFor from './ProductCard.module.css'
import Rating2 from './Rating2/Rating2';
import { NavLink } from 'react-router-dom';

function ProductCard(props) {
  const {auth} = props;
  const {profile} = props;
  debugger;
  return (
    props.products.map(product => 
      <div className={`col d-md-flex ${stylesFor.colProduct}`} key={product.id}>
      <div className={`card  ${stylesFor.productCard}`}>
        <div className={stylesFor.inner}> <img src={product.photo} className={`card-img-top ihv ${stylesFor.img}`} alt={product.type} /></div>
        <div className="card-body">
           <h5 className={stylesFor.priceCard}>{product.price}$</h5>
      <p className="card-text">{product.producer}/ <span className={stylesFor.productIdentificator}>{product.type}</span></p>
        <span className={stylesFor.availableSize}>Size: <span className={stylesFor.hideSize}><strong>{product.size}</strong></span></span>
        <p class="card-text">Tags: <span class={stylesFor.tagsDec}>{product.tags}</span> </p>
          <ul className="list-group list-group-flush">
             {product.isBought === true 
             ? <li className="list-group-item"><button className={`btn add-bag-button ${stylesFor.btnProductBought} btn-block`} type="button">Sold out</button></li>
             :<li className="list-group-item"><button className={`btn add-bag-button ${stylesFor.btnProduct} btn-block`} type="button" onClick={() => (props.buyProduct(product.id))}>Buy</button></li>
             }
            <li className="list-group-item">

            <Rating2 product={product} setRating={props.setRating} deleteRating={props.deleteRating} profile={props.profile} />
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

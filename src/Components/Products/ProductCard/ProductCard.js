import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductRating from './ProductRating/ProductRating';
import { NavLink } from 'react-router-dom';
import firebaseDb from '../../../firebase';

function ProductCard(props) {
  let [products, setProducts] = useState({})
  useEffect(() => {
    firebaseDb.child('products').on('value', snapshot => {
      if(snapshot.val() != null)
      setProducts({
        ...snapshot.val()
      })
    } )
  }, [])


  if(props.products.length === 0 ){
    Object.keys(products).map(id => {
      props.setProducts([products[id]])
    })
  }



  return (
    props.products.map(product => 
      <div className="col d-md-flex" key={product.id}>
      <div className="card  product-card">
        <div className="inner"> <img src={product.urlPhoto} className="card-img-top ihv" alt={product.type} /></div>
        <div className="card-body">
           <h5 className="price-card">{product.price}$</h5>
      <p className="card-text">{product.producer}/ <span className="product-identificator">{product.type}</span></p>
        <span className="available-sizes">Sizes: <span><strong>{product.sizes}</strong></span></span>
        <p class="card-text">Tags: <span class="tags-dec">{product.tags}</span> </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><button className="btn add-bag-button" type="button" onClick={() => (props.addToBag(product))}>Add to bag</button></li>
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

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductRating from './ProductRating/ProductRating';
import firebaseDb from '../../../firebase';
import stylesFor from './ProductCard.module.css'

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
      <div className={`col d-md-flex ${stylesFor.colProduct}`} key={product.id}>
      <div className={`card  ${stylesFor.productCard}`}>
        <div className={stylesFor.inner}> <img src={product.urlPhoto} className={`card-img-top ihv ${stylesFor.img}`} alt={product.type} /></div>
        <div className="card-body">
           <h5 className={stylesFor.priceCard}>{product.price}$</h5>
      <p className="card-text">{product.producer}/ <span className={stylesFor.productIdentificator}>{product.type}</span></p>
        <span className={stylesFor.availableSizes}>Sizes: <span className={stylesFor.hideSizes}><strong>{product.sizes}</strong></span></span>
        <p class="card-text">Tags: <span class={stylesFor.tagsDec}>{product.tags}</span> </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><button className={`btn add-bag-button ${stylesFor.btnProduct} btn-block`} type="button" onClick={() => (props.addToBag(product))}>Add to bag</button></li>
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

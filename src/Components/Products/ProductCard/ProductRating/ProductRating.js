import React from 'react';
import stylesFor from './ProductRating.module.css';

function ProductRating() {
  return (
    <div className={stylesFor.rating} data-total-value="2" >
                  <div className={stylesFor.ratingItem} data-item-value="5">★</div>
                  <div className={stylesFor.ratingItem} data-item-value="4">★</div>
                  <div className={stylesFor.ratingItem} data-item-value="3">★</div>
                  <div className={stylesFor.ratingItem} data-item-value="2">★</div>
                  <div className={stylesFor.ratingItem} data-item-value="1">★</div>
                </div>
  );
}



export default ProductRating;

import React from 'react';
import stylesFor from './ProductCard.module.css'
import Rating from './Rating/Rating';

const ProductCard = (props) => {


console.log(props.searchProducts);

  return (
    props.products.map(product =>
      ~product.tags.toLowerCase().indexOf(props.searchProducts)
      ?
      <div className={`col d-md-flex ${stylesFor.colProduct}`} key={product.id}>
      <div className={`card  ${stylesFor.productCard}`}>
        <div className={stylesFor.inner}> <img src={product.photo} className={`card-img-top ihv ${stylesFor.img}`} alt={product.type} /></div>
        <div className="card-body">
           <h5 className={stylesFor.priceCard}>{product.price}$</h5>
      <p className="card-text">{product.producer}/ <span className={stylesFor.productIdentificator}>{product.type}</span></p>
        <span className={stylesFor.availableSize}>Size: <span className={stylesFor.hideSize}><strong>{product.size}</strong></span></span>
        <p class="card-text">Tags: <span class={stylesFor.tagsDec}>{product.tags}</span> </p>
        <p className={stylesFor.description}>Description:{product.description}</p>
          <ul className="list-group list-group-flush">
             {product.isBought === true 
             ? <li className="list-group-item"><button className={`btn add-bag-button ${stylesFor.btnProductBought} btn-block`} type="button">Sold out</button></li>
             :<li className="list-group-item"><button className={`btn add-bag-button ${stylesFor.btnProduct} btn-block`} type="button"
              onClick={() => (props.buyProduct(product.id))}>Buy</button></li>
             }
            <li className="list-group-item">
            <Rating product={product} setRating={props.setRating} deleteRating={props.deleteRating} profile={props.profile} />
            </li>
          </ul>
        </div>
      </div>
  </div>

      : null
      
      )
   
  );
}

export default ProductCard;

import React from 'react';


function ProductCard(props) {
    const {product} = props; 
  return (
    <div className="col d-md-flex">
        <div className="card  product-card">
          <div className="inner"> <img src={product.urlPhoto} className="card-img-top ihv" alt={product.type} /></div>
          <div className="card-body">
             <h5 className="price-card">{product.price}</h5>
        <p className="card-text">{product.producer}/ <span className="product-identificator">{product.type}</span></p>
          <span className="available-sizes">Sizes: <span><strong>{product.sizes}</strong></span></span>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><a href="#" className="btn add-bag-button" type="button" data-toggle="modal" data-target="#seeMore">See more</a></li>
              <li className="list-group-item">
                <div className="rating" data-total-value="2">
                  <div className="rating-item" data-item-value="5">★</div>
                  <div className="rating-item" data-item-value="4">★</div>
                  <div className="rating-item" data-item-value="3">★</div>
                  <div className="rating-item" data-item-value="2">★</div>
                  <div className="rating-item" data-item-value="1">★</div>
                </div>
              </li>
            </ul>
            
          </div>
        </div>
    </div>
  );
}

export default ProductCard;

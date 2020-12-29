import React from 'react';
import { Redirect } from 'react-router-dom';
import stylesFor from './BookedProducts.module.css';

const BookedProducts = (props) => {
        const {auth} = props;
        if(!auth.uid) return <Redirect to='/log_in' />
        return(
            props.products.map(product =>
              props.bags.find(bag => bag === product.id) ?
              <div className="container">
                <div className={`row justify-content-center ${stylesFor.valuedThing}`}>
                <div className="col-6">
                  <div className={`card mb-3 border-0 ${stylesFor.cardProduct}`}>
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img src={product.photo} className="card-img" alt={product.type} />
                      </div>
                      <div className="col-md-6">
                        <div className="card-body">
                          <h5 className="card-title">
                            {product.producer} /
                             <span className="product-identificator">{product.type}</span>
                          </h5>
                          <p className={`card-text ${stylesFor.cardTextInside}`}>Price: {product.price}$</p>
                          <p className={`card-text ${stylesFor.cardTextInside}`}>Size: {product.size}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={`btn add-bag-button ${stylesFor.btnProductBook} btn-block`} type="button"
               onClick={() => (props.deleteBooked(product.id))}>Delete booked</button>
                </div>
              </div> 
              </div>  
              : null
              
            )
        );
    }


export default BookedProducts;

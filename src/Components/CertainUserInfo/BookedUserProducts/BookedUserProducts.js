import React from 'react';
import { Redirect } from 'react-router-dom';
import generalStylesFor from '../GeneralStyles.module.css';

const BookedUserProducts = (props) => {
        const {auth} = props;
        if(!auth.uid) return <Redirect to='/log_in' />
        return(
            props.products.map(product =>
              props.bags.find(bag => bag === product.id) ?
              <div className="container">
                <div className={`row justify-content-center ${generalStylesFor.valuedThing}`}>
                <div className="col-6">
                  <div className={`card mb-3 border-0 ${generalStylesFor.cardProduct}`}>
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
                          <p className={`card-text ${generalStylesFor.cardTextInside}`}>Price: {product.price}$</p>
                          <p className={`card-text ${generalStylesFor.cardTextInside}`}>Size: {product.size}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={`btn ${generalStylesFor.btnProductBook} btn-block`} type="button"
               onClick={() => (props.deleteBooked(product.id))}>Delete booked</button>
                </div>
              </div> 
              </div>  
              : null
              
            )
        );
    }


export default BookedUserProducts;

import React from 'react';
import { Redirect } from 'react-router-dom';
import stylesFor from './UserProducts.module.css';

const UserProducts = (props) => {
        const {auth} = props;
        if(!auth.uid) return <Redirect to='/log_in' />
        return(
            props.products.map(product =>
              props.valuedProducts.find(valuedProduct => valuedProduct.targetProductRating === product.id) ?
             
              <div className="container">
                <div className={`row justify-content-between ${stylesFor.valuedThing} align-items-center`}>
                <div className="col-4 mr-auto">
                  <div className={`card mb-3 border-0 ${stylesFor.cardProduct}`}>
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img src={product.photo} className="card-img" alt={product.type} />
                      </div>
                      <div className="col-md-6">
                        <div className="card-body">
                          <h5 className="card-title">
                            {product.producer} /
                             <span class="product-identificator">{product.type}</span>
                          </h5>
                          <p class={`card-text ${stylesFor.cardTextInside}`}>Price: {product.price}$</p>
                          <p class={`card-text ${stylesFor.cardTextInside}`}>Size: {product.size}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                 { props.valuedProducts.map(valuedProduct => 
                    valuedProduct.targetProductRating === product.id ?
                  <span> Your rate -<button className={`btn btn-info ${stylesFor.valueButton}`}> {valuedProduct.value}</button></span>
                   : null )
                 }
                </div>
              </div> 
              </div>  
              : null
              
            )
        );
    }


export default UserProducts;

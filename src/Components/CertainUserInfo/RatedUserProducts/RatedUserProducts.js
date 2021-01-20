import React from 'react';
import { Redirect } from 'react-router-dom';
import generalStylesFor from '../GeneralStyles.module.css';
import stylesFor from './RatedUser.module.css';

const RatedUserProducts = (props) => {
        const {auth} = props;
        if(!auth.uid) return <Redirect to='/log_in' />
        return(
            props.products.map(product =>
              props.valuedProducts.find(valuedProduct => valuedProduct.targetProductRating === product.id) ?
             
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
                  <div className='row justify-content-center'>
                  { props.valuedProducts.map(valuedProduct => 
                    valuedProduct.targetProductRating === product.id ?
                  <span> Your rate -<button className={`btn btn-info ${generalStylesFor.valueButton}`}> {valuedProduct.value}</button></span>
                   : null )
                 }
                 </div>
                <button className={` btn ${stylesFor.btnDelete} btn-block`} onClick={() => {props.deleteRating(product.id)}}>
                  Delete rate
                </button>
                </div>
              </div> 
              <hr></hr> 
              </div>
              : null
            )
        );
    }


export default RatedUserProducts;

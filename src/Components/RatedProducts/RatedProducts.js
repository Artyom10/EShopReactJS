import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import stylesFor from './RatedProducts.module.css'

const RatedProducts = (props) =>  {
        const {auth} = props;
        if(!auth.uid) return <Redirect to='/log_in' />
        return(
            props.users.map(user =>
                <div className="container">
            <div className={`col d-md-flex ${stylesFor.colProduct} justify-content-center border`} key={user.id}>
              <img src={user.userPhoto} className={`${stylesFor.userPhoto}`} />
            <p className="card-text">{user.firstName}  {user.secondName}</p>
                <ul className="list-group list-group-flush">
                {props.products.map(product =>
                         user.valuedProducts.map(valuedProduct => 
                            valuedProduct.targetProductRating === product.id ?
                         <li class={stylesFor.listItems}>
                            <p>Rate  <button className={`btn btn-info`}>{valuedProduct.value} </button>
                             <img className={stylesFor.imgIn} src={product.photo} /> </p>
                        </li>
                         : null ))
                    }
                  <li className="list-group-item">
                  </li>
                </ul>
                
            
            
        </div>
        </div>
            )
        );  
}

export default RatedProducts;

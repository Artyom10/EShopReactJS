import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import stylesFor from './ProductDetails.module.css'
import Rating2 from '../ProductCard/Rating2/Rating2';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { buyProduct, deleteRating, setRating } from '../../../redux/actions/productActions';

function ProductDetails(props) {
   // console.log(props.match.params.id);
  const {auth} = props;
  const {profile} = props;
  console.log(props);
  return (
      <div className={`col d-md-flex ${stylesFor.colProduct}`} key={props.product.id}>
      <div className={`card  ${stylesFor.productCard}`}>
        <div className={stylesFor.inner}> <img src={props.product.photo} className={`card-img-top ihv ${stylesFor.img}`} alt={props.product.type} /></div>
        <div className="card-body">
           <h5 className={stylesFor.priceCard}>{props.product.price}$</h5>
      <p className="card-text">{props.product.producer}/ <span className={stylesFor.productIdentificator}>{props.product.type}</span></p>
        <span className={stylesFor.availableSize}>Size: <span className={stylesFor.hideSize}><strong>{props.product.size}</strong></span></span>
        <p class="card-text">Tags: <span class={stylesFor.tagsDec}>{props.product.tags}</span> </p>
          <ul className="list-group list-group-flush">
             {props.product.isBought === true 
             ? <li className="list-group-item"><button className={`btn add-bag-button ${stylesFor.btnProductBought} btn-block`} type="button">Sold out</button></li>
             :<li className="list-group-item"><button className={`btn add-bag-button ${stylesFor.btnProduct} btn-block`} type="button" onClick={() => (props.buyProduct(props.product.id))}>Buy</button></li>
             }
            <li className="list-group-item">
             {/*<Rating2 product={props.product} setRating={props.setRating} deleteRating={props.deleteRating} /> */}
            </li>
          </ul>
          
        </div>
      </div>
  </div> 
  );
}

const mapStateToProps = (state) => {
    debugger;
    return {
        products: state.firestore.ordered.products || state.productPages.products,
        auth: state.firebase.auth,
        bags: state.firebase.profile.bags || [],
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      buyProduct: (targetProbuctBuy) => dispatch(buyProduct(targetProbuctBuy)),
      setRating: (targetProductRating, value, certainProduct) => dispatch(setRating(targetProductRating, value,certainProduct)),
      deleteRating: (targetProductDeleteRating,) => dispatch(deleteRating(targetProductDeleteRating)),
    }
}

export default compose(
   connect(mapStateToProps,mapDispatchToProps),
   firestoreConnect([
       { collection: 'products'},
       { collection: 'users'}
   ])
)(ProductDetails)

//export default ProductDetails;

import React from 'react';
import stylesFor from './Rating.module.css';

const Rating = (props) => {

  return (
      <>
      <label>rate</label>
    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div className="btn-group-sm mr-2" role="group" aria-label="First group">
    <button type="button" className={`btn btn-primary ${stylesFor.rateBtn}`} onClick={() => {props.setRating(props.product.id,1, props.product)}}>1</button>
    <button type="button" className={`btn btn-primary ${stylesFor.rateBtn}`} onClick={() => {props.setRating(props.product.id,2, props.product)}}>2</button>
    <button type="button" className={`btn btn-primary ${stylesFor.rateBtn}`} onClick={() => {props.setRating(props.product.id,3, props.product)}}>3</button>
    <button type="button" className={`btn btn-primary ${stylesFor.rateBtn}`} onClick={() => {props.setRating(props.product.id,4, props.product)}}>4</button>
    <button type="button" className={`btn btn-primary ${stylesFor.rateBtn}`} onClick={() => {props.setRating(props.product.id,5, props.product)}}>5</button>
    { props.profile.valuedProducts ?
      props.profile.valuedProducts.map(valuedProduct => 
        props.product.id === valuedProduct.targetProductRating
        ?
        <>
        <button type="button" className={`btn btn-primary ${stylesFor.deleteRateBtn}`} onClick={() => {props.deleteRating(props.product.id, props.product)}}>Delete rate</button> 
        <p className={stylesFor.rateAttention}>Your rate <button className={` btn ${stylesFor.rateUser}`}> {valuedProduct.value} </button></p>
        </>
        : null     
      )
      : null
    }
  </div>
</div>
</>
  );
}



export default Rating;

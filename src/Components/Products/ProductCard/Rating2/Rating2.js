import React from 'react';
import stylesFor from './Rating.module.css';

function Rating2(props) {

  return (
      <>
      <label>rate it</label>
    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group-sm mr-2" role="group" aria-label="First group">
    <button type="button" class={`btn btn-primary ${stylesFor.rateBtn}`} onClick={() => {props.setRating(props.product.id,1, props.product)}}>1</button>
    <button type="button" class={`btn btn-primary ${stylesFor.rateBtn}`} onClick={() => {props.setRating(props.product.id,2, props.product)}}>2</button>
    <button type="button" class={`btn btn-primary ${stylesFor.rateBtn}`} onClick={() => {props.setRating(props.product.id,3, props.product)}}>3</button>
    <button type="button" class={`btn btn-primary ${stylesFor.rateBtn}`} onClick={() => {props.setRating(props.product.id,4, props.product)}}>4</button>
    <button type="button" class={`btn btn-primary ${stylesFor.rateBtn}`} onClick={() => {props.setRating(props.product.id,5, props.product)}}>5</button>
    <button type="button" class={`btn btn-primary ${stylesFor.deleteRateBtn}`} onClick={() => {props.deleteRating(props.product.id, props.product)}}>Delete rate</button>
  </div>
</div>
</>
  );
}



export default Rating2;

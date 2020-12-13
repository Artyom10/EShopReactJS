import React from 'react';

function Rating2(props) {
  return (
      <>
      <label>rate it</label>
    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group-sm mr-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-primary" onClick={() => {props.setRating(props.product.id,1)}}>1</button>
    <button type="button" class="btn btn-primary" onClick={() => {props.setRating(props.product.id,2)}}>2</button>
    <button type="button" class="btn btn-primary" onClick={() => {props.setRating(props.product.id,3)}}>3</button>
    <button type="button" class="btn btn-primary" onClick={() => {props.setRating(props.product.id,4)}}>4</button>
    <button type="button" class="btn btn-primary" onClick={() => {props.setRating(props.product.id,5)}}>5</button>
    <button type="button" class="btn btn-primary" onClick={() => {props.deleteRating(props.product.id)}}>Delete rate</button>
  </div>
</div>
</>
  );
}



export default Rating2;

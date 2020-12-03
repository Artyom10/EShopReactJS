import React from 'react';
import stylesFor from './BagPayment.module.css';
function BagPayment(props) {

  return (
    <div className='container'>
     <small>Payment always upon receipt</small>
     <h3>Choose a payment option</h3>
     <div class="btn-group" data-toggle="buttons">
      <label className="btn active">
        <input
        className={stylesFor.inputX}
          type="radio"
          name="options"
          id="optionCash"
          autocomplete="off"
          checked
        />Cash
      </label>
      <label className="btn">
        <input
         className={stylesFor.inputX}
          type="radio"
          name="options"
          id="optionCard"
          autocomplete="off"
          checked
        />Card
      </label>
    </div>
    <hr />
</div>
  );
}

export default BagPayment;

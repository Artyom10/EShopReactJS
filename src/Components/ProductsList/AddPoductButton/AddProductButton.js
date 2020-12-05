import React from 'react';
import stylesFor from './AddProductButton.module.css'
import generalStyles from '../GeneralStyles.module.css';

function AddProductButton() {
  return (
    <div class="container">
    <div class="row justify-content-center">
      <div class="col">
        <button class={`btn ${generalStyles.generalButton} ${stylesFor.addButton} btn-block`} type="button" data-toggle="modal" data-target="#addProduct">Add product</button>
      </div>
    </div>
  </div>
  );
}

export default AddProductButton;

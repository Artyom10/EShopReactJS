import React from 'react';

function AddProductButton() {
  return (
    <div class="container">
    <div class="row justify-content-center">
      <div class="col">
        <button class="btn general-button add-button btn-block" type="button" data-toggle="modal" data-target="#addProduct">Add product</button>
      </div>
    </div>
  </div>
  );
}

export default AddProductButton;

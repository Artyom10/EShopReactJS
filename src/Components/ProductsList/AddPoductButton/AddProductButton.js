import React from 'react';
import stylesFor from './AddProductButton.module.css'
import generalStyles from '../GeneralStyles.module.css';

const AddProductButton = () => {
  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col">
        <button className={`btn ${generalStyles.generalButton} ${stylesFor.addButton} btn-block`} type="submit">Add product</button>
      </div>
    </div>
  </div>
  );
}

export default AddProductButton;

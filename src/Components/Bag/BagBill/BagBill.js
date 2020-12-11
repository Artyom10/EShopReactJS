import React from 'react';
import stylesFor from './BagBill.module.css';


function BagBill(props) {
  //let sum = props.bags.reduce((sum, current) => sum + +current.price, 0);
  return (
    <div className={`container ${stylesFor.orderBag}`}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
            <h3><span className="badge">Total: {} items worth - {}$</span></h3>
        </div>
        <div className="col-md-6">
          <button className={`btn ${stylesFor.orderButton}`}>Order</button>
        </div>
      </div>
    </div>
  );
}

export default BagBill;

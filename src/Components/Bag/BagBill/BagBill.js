import React from 'react';



function BagBill(props) {
  let sum = props.bags.reduce((sum, current) => sum + +current.price, 0);
  return (
    <div className="container order-bag">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
            <h3><span className="badge">Total: {props.bags.length} items worth - {sum}$</span></h3>
        </div>
        <div className="col-md-6">
          <button className="btn order-button">Order</button>
        </div>
      </div>
    </div>
  );
}

export default BagBill;

import React from 'react';



function BagBill(props) {

  return (
    <div className="container order-bag">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <h3><span className="badge">Total: 2 items worth - $ 150</span></h3>
        </div>
        <div className="col-md-6">
          <button className="btn order-button">Order</button>
        </div>
      </div>
    </div>
  );
}

export default BagBill;

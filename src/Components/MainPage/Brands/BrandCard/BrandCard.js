import React from 'react';

function BrandCard(props) {
  const {brand} = props;
  return (
    <div className="col-md-3 "><div className="card  text-center">
             <img src={brand.urlPhoto} className="card-img-top" alt={brand.urlPhoto} />
             
             <div className="card-body">
               <h5 className="card-title">{brand.title}</h5>
               <p class="card-text"><button class="btn btn-dark btn-sm">See now</button></p>
             </div>
           </div></div>
  );
}

export default BrandCard;

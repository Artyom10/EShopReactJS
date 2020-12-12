import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import stylesFor from './BagCard.module.css';


function BagCard(props) {
  return (
<div className={`row justify-content-between ${stylesFor.bagThing} border align-items-center`}>
       <div className="col-4 mr-auto">
         <div className={`card mb-3 border-0 ${stylesFor.cardBag}`}>
           <div className="row no-gutters">
             <div className="col-md-4">
               <img src={props.bags.photo} className="card-img" alt={props.bags.type} />
             </div>
             <div className="col-md-6">
               <div className="card-body">
                 <h5 className="card-title">
                   {props.product.producer} /
                    <span class="product-identificator">{props.bags.type}</span>
                 </h5>
                 <p class={`card-text ${stylesFor.cardTextInside}`}>Price: {props.bags.price}$</p>
                 <p class={`card-text ${stylesFor.cardTextInside}`}>Size: {props.bags.sizes}</p>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className="col-auto">
        {/* <span className={stylesFor.hiddenButton}><button className="btn btn-danger badge-pill" onClick={()=> (removeFromBag(bag.id))}>Remove</button></span>*/}
        <span className={stylesFor.hiddenButton}><button className="btn btn-danger badge-pill">Remove</button></span>
       </div>
     </div>   

      
  );
}
/*
BagCard.propTypes = {
  product: PropTypes.object.isRequired,
  urlPhoto: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  producer: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}*/

export default BagCard;


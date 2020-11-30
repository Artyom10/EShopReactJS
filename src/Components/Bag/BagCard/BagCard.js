import React from 'react';
import PropTypes from 'prop-types';
import {removeTargetActionCreator} from '../../../redux/bagPage-reducer';


const stylesForBag = {
  cardStyle: {
      maxWidth: '540px'
  }
}


function BagCard(props) {
  //const {bagItem} = props;
  //const {id, urlPhoto, price, producer, type, sizes, description, tags} = bagItem;

  



  return (
    props.bags.map(bag => 
      <div key={bag.id} className="row justify-content-between bag-thing border align-items-center">
      <div className="col-4 mr-auto">
        <div className="card mb-3 border-0" style={stylesForBag.cardStyle}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={bag.urlPhoto} className="card-img" alt={bag.type} />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">
                  {bag.producer} /
                   <span class="product-identificator">{bag.type}</span>
                </h5>
                <p class="card-text card-text-inside">Price: {bag.price}$</p>
                <p class="card-text card-text-inside">Size: {bag.sizes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-auto">
        <span className="hidden-button"
          ><button className="btn btn-danger badge-pill" onClick={()=> (props.removeFromBag(bag.id))}>Remove</button></span>
      </div>
    </div>
    )
   
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



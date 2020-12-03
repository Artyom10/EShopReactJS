import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {removeTargetActionCreator} from '../../../redux/bagPage-reducer';
import firebaseDb from '../../../firebase';
import stylesFor from './BagCard.module.css';


/*const stylesForBag = {
  cardStyle: {
      maxWidth: '540px'
  }
}*/


function BagCard(props) {
  let [bags, setBags] = useState({})
  useEffect(() => {
    firebaseDb.child('bags').on('value', snapshot => {
      if(snapshot.val() != null)
      setBags({
        ...snapshot.val()
      })
    } )
  }, [])

  if(props.bags.length === 0){
    Object.keys(bags).map(id => {
      props.setBags([bags[id]])
    })
  }

 


  return (
    props.bags.map(bag => 
      <div key={bag.id} className={`row justify-content-between ${stylesFor.bagThing} border align-items-center`}>
      <div className="col-4 mr-auto">
        <div className={`card mb-3 border-0 ${stylesFor.cardBag}`}>
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
                <p class={`card-text ${stylesFor.cardTextInside}`}>Price: {bag.price}$</p>
                <p class={`card-text ${stylesFor.cardTextInside}`}>Size: {bag.sizes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-auto">
        <span className={stylesFor.hiddenButton}
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



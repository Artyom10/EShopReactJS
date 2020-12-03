/*
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {removeTargetActionCreator} from '../../../redux/bagPage-reducer';
import firebaseDb from '../../../firebase';


class BagCardC extends React.Component {

    componentDidMount(){

        firebaseDb.child('bags').on('value', snapshot => {
            if (snapshot.val() != null)
                this.props.setBags(Object.values(snapshot.val()))
        })
        Object.keys(bags).map(id => {
            this.props.setBags([bags[id]])
          })


    }   

    
    render() {
        return (
            this.props.bags.map(bag => 
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
                  ><button className="btn btn-danger badge-pill" onClick={()=> (this.props.removeFromBag(bag.id))}>Remove</button></span>
              </div>
              <button onClick={getBags}>Get Bags</button>
            </div>
            
            )
           
          );
    }
}



export default BagCardC;

*/
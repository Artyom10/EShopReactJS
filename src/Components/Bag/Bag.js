import React, { Component } from 'react';
import BagPayment from './BagPayment/BagPayment';
import BagBillContainer from './BagBill/BagBillContainer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import BagCardContainer from './BagCard/BagCardContainer';


class Bag extends Component{
    render(){
     const {auth} = this.props;
     if(!auth.uid) return <Redirect  to='/log_in'/>
      return(
        <div>
        <div className="container">
           <BagCardContainer/>
        </div>
        <BagPayment />
        <BagBillContainer/>
     </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
   //bags: state.bagPage.bags,
   //auth: state.firebase.auth,
   auth: state.firebase.auth,
   bags: state.firebase.profile.bags,
  // products: state.firestore.ordered.products ||  state.productPages.products,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{    
   // removeFromBag: (removeTargetBag) => dispatch(removeFromBag(removeTargetBag))
  }
}


export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  firestoreConnect([
    { collection: 'products'}
  ])
)(Bag)
//export default connect(mapStateToProps, mapDispatchToProps)(Bag);
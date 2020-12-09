import React, { Component } from 'react';
import BagCard from './BagCard/BagCard';
import BagPayment from './BagPayment/BagPayment';
import BagBillContainer from './BagBill/BagBillContainer';
import { removeFromBag } from '../../redux/actions/bagActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Bag extends Component{
    render(){
     const {bags} = this.props;
     const {auth} = this.props;
     if(!auth.uid) return <Redirect  to='/log_in'/>
      return(
        <div>
        <div className="container">
         {bags && bags.map(bag =>
           <BagCard bag={bag} key={bag.id} removeFromBag={this.props.removeFromBag}  />
          )}
        </div>
        <BagPayment />
        <BagBillContainer/>
     </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
   bags: state.bagPage.bags,
   auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{    
    removeFromBag: (removeTargetBag) => dispatch(removeFromBag(removeTargetBag))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bag);
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from "./ProductCard/ProductCard";
import { Redirect } from 'react-router-dom';
import { buyProduct, deleteRating, setRating } from '../../redux/actions/productActions';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';


class ShowProducts extends Component{
    render(){
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to='/log_in' />
        return(
            <div className="container-all-product">
            <div className="container">
                <div className="row">
                    <ProductCard products={this.props.products} buyProduct={this.props.buyProduct} bags={this.props.bags}
                    setRating={this.props.setRating} deleteRating={this.props.deleteRating} user={this.user} />
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    debugger;
    return {
        products: state.firestore.ordered.products || state.productPages.products,
        auth: state.firebase.auth,
        bags: state.firebase.profile.bags || [],
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      buyProduct: (targetProbuctBuy) => dispatch(buyProduct(targetProbuctBuy)),
      setRating: (targetProductRating, value, certainProduct) => dispatch(setRating(targetProductRating, value,certainProduct)),
      deleteRating: (targetProductDeleteRating,) => dispatch(deleteRating(targetProductDeleteRating)),
    }
}

export default compose(
   connect(mapStateToProps,mapDispatchToProps),
   firestoreConnect([
       { collection: 'products'},
       { collection: 'users'}
   ])
)(ShowProducts)

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from "./ProductCard/ProductCard";
import { Redirect } from 'react-router-dom';
import { buyProduct } from '../../redux/actions/productActions';
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
                    <ProductCard products={this.props.products} buyProduct={this.props.buyProduct} bags={this.props.bags} />
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.firestore.ordered.products || state.productPages.products,
        auth: state.firebase.auth,
        bags: state.firebase.profile.bags || [],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      buyProduct: (targetProbuctBuy) => dispatch(buyProduct(targetProbuctBuy)),
    }
}

export default compose(
   connect(mapStateToProps,mapDispatchToProps),
   firestoreConnect([
       { collection: 'products'}
   ])
)(ShowProducts)

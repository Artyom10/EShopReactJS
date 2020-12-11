import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from "./ProductCard/ProductCard";
import { Redirect } from 'react-router-dom';
import { addToBag } from '../../redux/actions/bagActions';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';

/*
ShowProducts.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object)
}
*/

class ShowProducts extends Component{
    render(){
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to='/log_in' />
        console.log(this.props.products, this.props.auth.uid)
        return(
            <div className="container-all-product">
            <div className="container">
                <div className="row">
                    <ProductCard products={this.props.products} addToBag={this.props.addToBag} />
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.firestore.ordered.products || state.productPages.products,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addToBag: (targetAddToBag) => dispatch(addToBag(targetAddToBag)),
    }
}

export default compose(
   connect(mapStateToProps,mapDispatchToProps),
   firestoreConnect([
       { collection: 'products'}
   ])
)(ShowProducts)

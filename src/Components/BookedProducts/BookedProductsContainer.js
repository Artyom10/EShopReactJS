import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import BookedProducts from './BookedProducts';
import { deleteBooked } from '../../redux/actions/productActions';


const mapStateToProps = (state) => {
    return {
        products: state.firestore.ordered.products || state.productPages.products,
        auth: state.firebase.auth,
        bags: state.firebase.profile.bags || [],

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBooked: (productId) => dispatch(deleteBooked(productId)),
    }
}

export default compose(
   connect(mapStateToProps,mapDispatchToProps),
   firestoreConnect([
       { collection: 'products'},
       { collection: 'users'}
   ])
)(BookedProducts)






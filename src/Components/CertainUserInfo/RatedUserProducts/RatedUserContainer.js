import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { deleteRating } from '../../../redux/actions/productActions';
import RatedUserProducts from './RatedUserProducts';


const mapStateToProps = (state) => {
    return {
        products: state.firestore.ordered.products || state.productPages.products,
        auth: state.firebase.auth,
        valuedProducts: state.firebase.profile.valuedProducts || [],

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteRating: (targetProductDeleteRating,) => dispatch(deleteRating(targetProductDeleteRating)),
    }
}

export default compose(
   connect(mapStateToProps,mapDispatchToProps),
   firestoreConnect([
       { collection: 'products'},
       { collection: 'users'}
   ])
)(RatedUserProducts)






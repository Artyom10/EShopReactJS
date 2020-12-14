import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import UserProducts from './UserProducts';


const mapStateToProps = (state) => {
    return {
        products: state.firestore.ordered.products || state.productPages.products,
        auth: state.firebase.auth,
        valuedProducts: state.firebase.profile.valuedProducts || [],

    }
}

export default compose(
   connect(mapStateToProps,{}),
   firestoreConnect([
       { collection: 'products'},
       { collection: 'users'}
   ])
)(UserProducts)






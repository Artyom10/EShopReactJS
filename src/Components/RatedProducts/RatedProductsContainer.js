import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import RatedProducts from './RatedProducts';


const mapStateToProps = (state) => {
    return {
        products: state.firestore.ordered.products || state.productPages.products,
        auth: state.firebase.auth,
       users: state.firestore.ordered.users || [],

    }
}



export default compose(
   connect(mapStateToProps,{}),
   firestoreConnect([
       { collection: 'products'},
       { collection: 'users'}
   ])
)(RatedProducts)







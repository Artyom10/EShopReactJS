import React from 'react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { buyProduct, deleteBooked, deleteRating, setRating } from '../../../redux/actions/productActions';
import ProductCard from './ProductCard';

const mapStateToProps = (state) => {
    return {
        products: state.firestore.ordered.products || state.productPages.products,
        auth: state.firebase.auth,
        bags: state.firebase.profile.bags || [],
        profile: state.firebase.profile,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      buyProduct: (targetProbuctBuy) => dispatch(buyProduct(targetProbuctBuy)),
      setRating: (targetProductRating, value, certainProduct) => dispatch(setRating(targetProductRating, value,certainProduct)),
      deleteRating: (targetProductDeleteRating,) => dispatch(deleteRating(targetProductDeleteRating)),
      deleteBooked: (productId) => dispatch(deleteBooked(productId)),
    }
}

/*export default compose(
   connect(mapStateToProps,mapDispatchToProps),
   firestoreConnect([
       { collection: 'products'},
       { collection: 'users'}
   ])
)(ProductCard)*/
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);

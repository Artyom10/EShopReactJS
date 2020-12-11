import React from 'react';
import PropTypes from 'prop-types';
import { removeTarget, setBags} from '../../../redux/reducers/bagPageReducer';
import BagCard from './BagCard';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class BagCardContainer extends React.Component {
    render(){
        return(
         <BagCard/>
        );
    }
}
//findProductById


const mapStateToProps = (state) => {
    console.log(state.firebase.profile.bags)
    return {
     //products: state.firestore.ordered.products ||  state.productPages.products,
     auth: state.firebase.auth,
     product: state.firebase.profile.bags,
    }
 }

export default compose(
    connect(mapStateToProps,{}),
    firestoreConnect([
        {collection: 'products'}
    ])
)(BagCard)


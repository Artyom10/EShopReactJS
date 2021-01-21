import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import ProductList from './ProductsList';


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
  }

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        { collection: 'products'},
    ])
)(ProductList)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowProducts from './ShowPoducts';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {addToBag} from '../../redux/actions/productActions'

/*const mapStateToProp = (state) => {
    return {
     products: state.productPages.products,
    }
 }

 const ShowProductsContainer = connect(mapStateToProp,{})(ShowProducts);
*/

class ShowProductsContainer extends Component{
    render(){
        return(
          <ShowProducts />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.firestore.ordered.products || state.productPages.products
    }
 }

 const mapDispatchToProps = (dispatch) => {
     return {
     addToBag: (targetAddToBag) => dispatch(addToBag(targetAddToBag)),
     }
 }

export default compose(
    connect(mapStateToProps,{}),
    firestoreConnect([
        { collection: 'products'}
    ])
)(ShowProducts)
//export default ShowProductsContainer;
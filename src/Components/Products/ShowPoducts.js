import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from "./ProductCard/ProductCard";
import ProductCardContainer from './ProductCard/ProductCardContainer';


function ShowProducts(props) {
    return (
        <div className="container-all-product">
            <div className="container">
                <div className="row">
                    <ProductCardContainer />
                </div>
            </div>
        </div>
    );
}
/*
ShowProducts.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object)
}
*/


export default ShowProducts;
import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from "./ProductCard/ProductCard";
import './Products.css'
import ProductCardContainer from './ProductCard/ProductCardContainer';


function ShowProducts(props) {
    /*(const seeProducts = props.products.map(product => {
        return <ProductCard product={product}></ProductCard>
     })*/
    return (
        <div className="container-all-product">
            <div className="container">
                <div className="row">
                    {/*props.products.map(product => {
                       return <ProductCard product={product}></ProductCard>
                    })*/}
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
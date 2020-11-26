import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from "./ProductCard/ProductCard";
import './Products.css'


function ShowProducts(props) {
    /*(const seeProducts = props.products.map(product => {
        return <ProductCard product={product}></ProductCard>
     })*/
    return (
        <div className="container-all-product">
            <div className="container">
                <div className="row">
                    {props.products.map(product => {
                       return <ProductCard product={product}></ProductCard>
                    })}
                </div>
            </div>
        </div>
    );
}

ShowProducts.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object)
}


export default ShowProducts;
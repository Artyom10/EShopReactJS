import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from "./ProductCard/ProductCard";
//import products from "./ProductsData";
/*
<ProductCard product={products[0]}></ProductCard>
                    <ProductCard product={products[1]}></ProductCard>
                    <ProductCard product={products[2]}></ProductCard>
                    <ProductCard product={products[3]}></ProductCard>
                    <ProductCard product={products[4]}></ProductCard>
                    <ProductCard product={products[5]}></ProductCard>
                    <ProductCard product={products[6]}></ProductCard>
                    <ProductCard product={products[7]}></ProductCard>
*/


function ShowProducts(props) {
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
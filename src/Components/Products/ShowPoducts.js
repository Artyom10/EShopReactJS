import React from 'react';
import ProductCard from "./ProductCard/ProductCard";
import products from "./ProductsData";

function ShowProducts() {
    return (
        <div className="container-all-product">
            <div className="container">
                <div className="row">
                    <ProductCard product={products[0]}></ProductCard>
                    <ProductCard product={products[1]}></ProductCard>
                    <ProductCard product={products[2]}></ProductCard>
                    <ProductCard product={products[3]}></ProductCard>
                    <ProductCard product={products[4]}></ProductCard>
                    <ProductCard product={products[5]}></ProductCard>
                    <ProductCard product={products[6]}></ProductCard>
                    <ProductCard product={products[7]}></ProductCard>
                </div>
            </div>
        </div>
    );
}

export default ShowProducts;
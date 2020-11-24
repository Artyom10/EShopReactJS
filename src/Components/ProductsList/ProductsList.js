import React from 'react';
import ProductAdminCard from './ProductAdminCard/ProductAdminCard';
import products from '../Products/ProductsData';



function ProductList() {
    return (
       <div className="container">
          <div className="row"> 
              <ProductAdminCard product={products[0]}></ProductAdminCard>
              <ProductAdminCard product={products[1]}></ProductAdminCard>
              <ProductAdminCard product={products[2]}></ProductAdminCard>
              <ProductAdminCard product={products[3]}></ProductAdminCard>
              <ProductAdminCard product={products[4]}></ProductAdminCard>
              <ProductAdminCard product={products[5]}></ProductAdminCard>
              <ProductAdminCard product={products[6]}></ProductAdminCard>
              <ProductAdminCard product={products[7]}></ProductAdminCard>
          </div>
       </div>
    );
}

export default ProductList;
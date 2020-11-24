import React from 'react';
import PropTypes from 'prop-types';
import ProductAdminCard from './ProductAdminCard/ProductAdminCard';



function ProductList(props) {
    return (
       <div className="container">
          <div className="row"> 
               {props.products.map( product => {
                   return <ProductAdminCard  product={product}/>
               })}
          </div>
       </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ProductList;
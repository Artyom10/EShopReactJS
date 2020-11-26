import React from 'react';
import PropTypes from 'prop-types';
import ProductAdminCard from './ProductAdminCard/ProductAdminCard';
import AddProductButton from './AddPoductButton/AddProductButton';
import ModalAddProduct from './ModalAddProduct/ModalAddProduct';


function ProductList(props) {

    return (
       <div className="container">
           <AddProductButton />
           <ModalAddProduct addProduct={props.addProduct}/>
          <div className="row"> 
               {props.products.map( product => {
                   return <ProductAdminCard  product={product} />
               })}
          </div>
          
       </div>
    );
}
/*
ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
}
*/
export default ProductList;
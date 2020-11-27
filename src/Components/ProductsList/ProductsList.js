import React from 'react';
import PropTypes from 'prop-types';
import ProductAdminCard from './ProductAdminCard/ProductAdminCard';
import AddProductButton from './AddPoductButton/AddProductButton';
import ModalAddProduct from './ModalAddProduct/ModalAddProduct';


function ProductList(props) {
  const allAdmin = props.products.map(product => 
    <ProductAdminCard urlPhoto={product.urlPhoto} price={product.price} producer={product.producer} type={product.type}
    sizes={product.sizes} description={product.description} tags={product.tags} />  )
    return (
       <div className="container">
           <AddProductButton />
           <ModalAddProduct dispatch={props.dispatch}/>
          <div className="row"> 
               {/*props.products.map( product => {
                   return <ProductAdminCard  product={product} />
               })*/}
               {allAdmin}
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
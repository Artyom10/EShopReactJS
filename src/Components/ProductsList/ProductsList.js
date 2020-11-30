import React from 'react';
import PropTypes from 'prop-types';
import ProductAdminCard from './ProductAdminCard/ProductAdminCard';
import AddProductButton from './AddPoductButton/AddProductButton';
import ModalAddProduct from './ModalAddProduct/ModalAddProduct';
import ProductAdminCardContainer from './ProductAdminCard/ProductAdminCardContainer';
import ModalAddProductContainer from './ModalAddProduct/ModalAddProductContainer';


function ProductList(props) {
  /*const allAdmin = props.products.map(product => 
    <ProductAdminCard product={product} dispatch={props.dispatch} changedProductObject={props.changedProductObject} />  )*/
    return (
       <div className="container">
           <AddProductButton />
           <ModalAddProductContainer />
          <div className="row"> 
               {/*props.products.map( product => {
                   return <ProductAdminCard  product={product} />
               })*/}
               <ProductAdminCardContainer />
           
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
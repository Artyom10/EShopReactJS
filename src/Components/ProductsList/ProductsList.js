import React from 'react';
import ProductAdminCard from './ProductAdminCard/ProductAdminCard';
import { Redirect } from 'react-router-dom';
import AddProductContainer from './AddProduct/AddProductContainer';
import ProductAdminCardContainer from './ProductAdminCard/ProductAdminCardContainer';




const ProductList = (props) => {
        const {auth} = props;
        if(!auth.uid) return <Redirect to='/log_in' />
        return(
            <div className="container">
             <AddProductContainer />
            <div className="row"> 
               <ProductAdminCardContainer /> 
            </div>
            
         </div>
        );
}

export default ProductList;




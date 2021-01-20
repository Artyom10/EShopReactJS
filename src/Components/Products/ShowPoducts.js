import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from "./ProductCard/ProductCard";
import { Redirect } from 'react-router-dom';
import ProductCardContainer from './ProductCard/ProductCardContainer';

const ShowProducts = (props) =>{
    let [searchProducts, setSearchProducts] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
         setSearchProducts(e.target.value)
    }
 
         const {auth} = props;
         if(!auth.uid) return <Redirect to='/log_in' />
         return(
             <div className="container-all-product">
             <div className="container">
                 <input className="form-control" id="searchProducts" placeholder="search products by tag"
                 onChange={handleSearch} value={searchProducts}></input>
                 <div className="row">
                    {/* <ProductCard products={props.products} buyProduct={props.buyProduct} bags={props.bags}
                    setRating={props.setRating} deleteRating={props.deleteRating}
                    profile={props.profile} searchProducts={searchProducts} auth={props.auth} deleteBooked={props.deleteBooked} isWho={props.profile.isWho} />
         */}
         <ProductCardContainer searchProducts={searchProducts} />
                    </div>
             </div>
         </div>
         );
 }

export default ShowProducts;

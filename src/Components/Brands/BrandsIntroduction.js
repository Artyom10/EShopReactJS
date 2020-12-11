import React from 'react';
import PropTypes from 'prop-types';
import stylesFor from './BrandsIntroduction.module.css';
import BrandCardContainer from './BrandCard/BrandCardContainer';

function BrandIntroduction(props) {
    return (
        <div className="container-brand-card">
   <h1 className={stylesFor.brandIntroduction}>Most popular clothes</h1>
       <div className="container">
         <div className="row">
             <BrandCardContainer />
        </div>
       </div>
     </div>
    );
}
/*
BrandIntroduction.propTypes = {
  brands: PropTypes.arrayOf(PropTypes.object).isRequired
}*/

export default BrandIntroduction;
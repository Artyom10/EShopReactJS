import React from 'react';
import BrandCard from './BrandCard/BrandCard'
import PropTypes from 'prop-types';
import './BrandsIntroduction.css';
import BrandCardContainer from './BrandCard/BrandCardContainer';

function BrandIntroduction(props) {
    return (
        <div className="container-brand-card">
   <h1 className="brand-introduction">Most popular brands</h1>
       <div className="container">
         <div className="row">
             {/*props.brands.map(brand => {
               return <BrandCard brand={brand} />
             })*/}
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
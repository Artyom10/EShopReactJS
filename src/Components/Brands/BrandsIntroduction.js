import React from 'react';
import BrandCard from './BrandCard/BrandCard'
import PropTypes, { object } from 'prop-types';

function BrandIntroduction(props) {
    return (
        <div className="container-brand-card">
       <div className="container">
         <div className="row">
             {props.brands.map(brand => {
               return <BrandCard brand={brand} />
             })}
        </div>
       </div>
     </div>
    );
}

BrandIntroduction.propTypes = {
  brands: PropTypes.arrayOf(object).isRequired
}

export default BrandIntroduction;
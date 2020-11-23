import React from 'react';
import BrandCard from './BrandCard/BrandCard'
import brands from './BrandsData';

function BrandIntroduction() {
    return (
        <div className="container-brand-card">
       <div className="container">
         <div className="row">
             <BrandCard brand={brands[0]}></BrandCard>
             <BrandCard brand={brands[1]}></BrandCard>
             <BrandCard brand={brands[2]}></BrandCard>
             <BrandCard brand={brands[3]}></BrandCard>
        </div>
       </div>
     </div>
    );
}

export default BrandIntroduction;
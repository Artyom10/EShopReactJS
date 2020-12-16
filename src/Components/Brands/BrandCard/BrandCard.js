import React from 'react';
import PropTypes from 'prop-types';
import stylesFor from './BrandCard.module.css';


function BrandCard(props) {  
  return (
    props.brands.map(brand => 
      <div className="col-md-3 "><div className={`${stylesFor.cardIntro} card  text-center`}>
      <img src={brand.urlPhoto} className="card-img-top" alt={brand.title} />
      <div className="card-body">
        <p className='card-text'>{brand.title}</p>
        <p className="card-text"><button className="btn btn-dark btn-sm">See now</button></p>
      </div>
    </div></div>
      )
  );
}
/*
BrandCard.propTypes = {
  brand: PropTypes.object.isRequired,
  title: PropTypes.string,
  urlPhoto: PropTypes.string.isRequired
}
*/
export default BrandCard;

import React from 'react';
import PropTypes from 'prop-types';

function BrandCard(props) {
  const {brand} = props;
  const {title, urlPhoto} = brand;
  return (
    <div className="col-md-3 "><div className="card  text-center">
             <img src={urlPhoto} className="card-img-top" alt={title} />
             
             <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <p className="card-text"><button className="btn btn-dark btn-sm">See now</button></p>
             </div>
           </div></div>
  );
}

BrandCard.propTypes = {
  brand: PropTypes.object.isRequired,
  title: PropTypes.string,
  urlPhoto: PropTypes.string.isRequired
}

export default BrandCard;

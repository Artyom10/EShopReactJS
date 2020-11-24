import React from 'react';
import PropTypes from 'prop-types';

function StyleCard(props) {
  const {styleType} = props;
  const {urlPhoto, title} = styleType; 
  return (
    <div className="col-4"> <figure className="figure test-img">
      <img src={urlPhoto} className="figure-img img-fluid rounded" alt={title} />
  <p class="choose-style-description">{title}</p>
    </figure>
    </div>
  );
}

StyleCard.propTypes = {
  styleType: PropTypes.object.isRequired,
  urlPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default StyleCard;


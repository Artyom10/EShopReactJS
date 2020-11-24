import React from 'react';

function StyleCard(props) {
  const {stylesType} = props;
  const {urlPhoto, title} = stylesType; 
  return (
    <div className="col-4"> <figure className="figure test-img">
      <img src={urlPhoto} className="figure-img img-fluid rounded" alt={title} />
  <p class="choose-style-description">{title}</p>
    </figure>
    </div>
  );
}

export default StyleCard;


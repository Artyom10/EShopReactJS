import React from 'react';

function StyleCard(props) {
  const {stylesType} = props;
  return (
    <div className="col-4"> <figure className="figure test-img">
      <img src={stylesType.urlPhoto} className="figure-img img-fluid rounded" alt={stylesType.title} />
  <p class="choose-style-description">{stylesType.title}</p>
    </figure>
    </div>
  );
}

export default StyleCard;


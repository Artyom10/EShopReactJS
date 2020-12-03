import React from 'react';
import PropTypes from 'prop-types';
import stylesFor from './StyleCard.module.css';

function StyleCard(props) {
  return (
    props.stylesExample.map(styleOf =>
      <div className="col-4"> <figure className="figure test-img">
      <img src={styleOf.urlPhoto} className="figure-img img-fluid rounded" alt={styleOf.title} />
  <p className={stylesFor.chooseStyleDescription}>{styleOf.title}</p>
    </figure>
    </div>
      )
  );
}
/*
StyleCard.propTypes = {
  styleType: PropTypes.object.isRequired,
  urlPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}*/

export default StyleCard;


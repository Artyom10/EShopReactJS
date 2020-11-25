import React from 'react';
import PropTypes from 'prop-types';
import StyleCard from './StyleCard/StyleCard';
import './StyleExamples.css';


function StyleExamples(props) {
    return (
        <div className="container">
               <h3 className="choose-style-introduction">Choose your style</h3>
            <div className="row">
                {props.stylesExample.map(style => {
                    return <StyleCard styleType={style} />
                })}
            </div>
        </div>
    );
}

StyleExamples.propTypes = {
    guidStyle: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default StyleExamples;
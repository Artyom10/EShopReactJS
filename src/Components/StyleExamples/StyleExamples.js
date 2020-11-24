import React from 'react';
import PropTypes from 'prop-types';
import StyleCard from './StyleCard/StyleCard';


function StyleExamples(props) {
    return (
        <div className="container">
            <div className="row">
                {props.guidStyle.map(style => {
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
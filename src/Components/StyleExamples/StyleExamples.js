import React from 'react';
import PropTypes from 'prop-types';
import stylesFor from  './StyleExamples.module.css';
import StyleCardContainer from './StyleCard/StyleCardContainer';


function StyleExamples(props) {
    return (
        <div className="container">
               <h3 className={stylesFor.chooseStyleIntroduction}>Choose your style</h3>
            <div className="row">
                <StyleCardContainer />
            </div>
        </div>
    );
}
/*
StyleExamples.propTypes = {
    guidStyle: PropTypes.arrayOf(PropTypes.object).isRequired
}
*/
export default StyleExamples;
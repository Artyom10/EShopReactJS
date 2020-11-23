import React from 'react';
import StyleCard from './StyleCard/StyleCard';
import styles from './StyleExampleData';

function StyleExamples() {
    return (
        <div className="container">
            <div className="row">
            <StyleCard stylesType={styles[0]}></StyleCard>
            <StyleCard stylesType={styles[1]}></StyleCard>
            <StyleCard stylesType={styles[2]}></StyleCard>
            </div>
        </div>
    );
}

export default StyleExamples;
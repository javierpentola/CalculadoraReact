import React from 'react';
import PropTypes from 'prop-types';

const ResultComponent = ({ result }) => {
    return (
        <div className="result">
            <p>{result}</p>
        </div>
    );
};

ResultComponent.propTypes = {
    result: PropTypes.string.isRequired
};

export default ResultComponent;

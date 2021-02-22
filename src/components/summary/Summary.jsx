import React from 'react';
import './Summary.scss';

const Summary = ({ value, resultsCount }) => {
    return (
        <div className="summary">
            {resultsCount > 0 ? `Showing ${resultsCount} results for “${value}“` : `No results for “${value}“`}
        </div>
        
    );
}

export default Summary;
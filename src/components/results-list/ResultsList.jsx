import React from 'react';
import ResultsCard from '../results-card/ResultsCard';
import './ResultsList.scss';

const ResultsList = ({ results }) => {
    return (
        <div className="results_list">
            {results.map((item, i) => <ResultsCard key={`listing_${i}`} data={item} />)}
        </div>
    );   
}

export default ResultsList;
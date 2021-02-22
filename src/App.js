import React, { useState } from 'react';
import useFetch from './hooks/useFetch';
import useDataByCountry from './hooks/useDataByCountry';
import useFilter from './hooks/useFilter';
import Header from './layout/Header/Header';
import SearchBar from './components/search-bar/SearchBar';
import Summary from './components/summary/Summary';
import ResultsList from './components/results-list/ResultsList';
import Message from './components/message/Message';
import './app.style.scss';

const App = () => {

    const [value, setValue] = useState("");
    const { data } = useFetch('data.json');
    const { dataByCountry } = useDataByCountry(data);
    const { results } = useFilter(data, dataByCountry, value);

    const handleSubmit = (event, value) => {
        event.preventDefault();
        setValue(value);
    }

    return(
        <div className="app">
            <Header />
            <h1>Nearby Myndlift Providers</h1>
            <SearchBar handleSubmit={handleSubmit}/>
            {value !== "" && <Summary value={value} resultsCount={results.length} />}
            {results.length > 0 && <ResultsList results={results}/>}
            {value !== "" && results.length === 0 && <Message />}
        </div>
    );
}

export default App;
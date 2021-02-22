import { states_names, states_names_reverse } from '../assets/resources/states_names';
import { useState, useEffect } from 'react';

const useFilter = (data, dataByCountry, value) => {
    const [results, setResults] = useState([]);

    useEffect(() => {

        // check if the value exists in the data
        const hasResults = (key, key_alt) => dataByCountry.hasOwnProperty(key) || dataByCountry.hasOwnProperty(key_alt);
        
        // find alternative state name in array uf US and Canada state names
        const findKeyAlt = (key) => {
            if (states_names[key]) return states_names[key];
            else if (states_names_reverse[key]) return states_names_reverse[key];
            else return "";
        }

        // find an array of listings ids mapped to the searched value
        const findIds = (key, key_alt) => dataByCountry[key] ? dataByCountry[key] : dataByCountry[key_alt];
        
        // build an array of listings to render as search results
        const buildResults = (arr) => arr.map(item => data[item].listings[Object.keys(data[item].listings)[0]]);

        const filterData = () => {

            const key = value.toLowerCase();
            const key_alt = findKeyAlt(key);

            if (hasResults(key, key_alt)) {
                setResults(buildResults(findIds(key, key_alt)));
            } 
            else {
                setResults([]);
            }
        };
        filterData();
    }, [ data, dataByCountry, value ]);

    return { results };
};

export default useFilter;
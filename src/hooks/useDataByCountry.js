import { states_names, states_names_reverse } from '../assets/resources/states_names';
import { useState, useEffect } from 'react';

// builds a new data dictionary with country or state name as a key and an array of listings ids as a value
const useDataByCountry = (data) => {
    const [dataByCountry, setDataByCountry] = useState({});
  
    useEffect(() => {

        // check for irrelevant/empty rows
        const hasListings = (data, row) => Object.prototype.hasOwnProperty.call(data, row) && data[row].hasOwnProperty("listings");

        // check if we should use a country or a state name as a key 
        const hasStates = (country) => country === "United States" || country === "Canada";

        // find alternative state name in array uf US and Canada state names
        const findAltStateName = (state) => states_names[state] ? states_names[state] : states_names_reverse[state];

        const formatData = () => {
            // using regular (not state) variable since the state should only update when the whole new list is finished
            let list = {};

            for (let row in data) {
                if (hasListings(data, row)) {
                    
                    // extract country and state names form listing 
                    let { country, state } = data[row].listings[Object.keys(data[row].listings)[0]];
                    
                    // create key name
                    let key = hasStates(country) ? state.toLowerCase() : country.toLowerCase();
                    let key_alt = hasStates(country) ? findAltStateName(state.toLowerCase()) : "";

                    // push current row id into list
                    if (list.hasOwnProperty(key)) {
                        // the key or the alt key already exists
                        list[key] = [...list[key], row];
                    }
                    else if (list.hasOwnProperty(key_alt)) {
                        // the alt key already exists
                        list[key_alt] = [...list[key_alt], row];
                    }
                    else {
                        // new key
                        list[key] = [row];
                    }
                }
            }
            // console.log(list)
            setDataByCountry(list);
        };
        formatData();
    }, [data]);
    return { dataByCountry };
};

export default useDataByCountry;

         
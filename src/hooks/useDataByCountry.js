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
                    const { country, state } = data[row].listings[Object.keys(data[row].listings)[0]];
                    
                    const l_country = country.toLowerCase();
                    const l_state = hasStates(country) ? state.toLowerCase() : "";
                    const l_state_alt = hasStates(country) ? findAltStateName(state.toLowerCase()) : "";
                    
                    // push current row id into list
                    if (list.hasOwnProperty(l_country)) {
                        // the country already exists
                        list[l_country] = [...list[l_country], row];
                    }

                    if (!list.hasOwnProperty(l_country)) {
                        // new country
                        list[l_country] = [row];
                    }

                    if (list.hasOwnProperty(l_state)) {
                        // the state name already exists
                        list[l_state] = [...list[l_state], row];
                    }

                    else if (list.hasOwnProperty(l_state_alt)) {
                        // the alt state name already exists
                        list[l_state_alt] = [...list[l_state_alt], row];
                    }

                    else if (l_state !== "") {
                        // new state name
                        list[l_state] = [row];
                    }
                    
                }
            }
            console.log(list)
            setDataByCountry(list);
        };
        formatData();
    }, [data]);
    return { dataByCountry };
};

export default useDataByCountry;

         
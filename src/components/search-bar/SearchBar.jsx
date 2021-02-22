import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.scss';

const SearchBar = ({ handleSubmit }) => {
    const [ value, setValue ] = useState("");

    return (
        <form 
            className="search_form" 
            onSubmit={(event) => handleSubmit(event, value)}>
            <div>
                <input 
                    className="search_form__field"
                    type="text" 
                    placeholder="Search by city, state, or country"
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} />
                <FontAwesomeIcon icon={faSearch} size="2x" />
            </div>
            <input 
                className="search_form__button"
                type="submit" 
                value={"Search"} />
        </form>
    );
}

export default SearchBar;
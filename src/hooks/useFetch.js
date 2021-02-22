import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(url, {
                headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }
            });
            setData(response.data);
        };
        getData();
    }, [url]);

    return { data };
};

export default useFetch;
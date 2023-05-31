import React from 'react'
import axios from 'axios'
import { useRef } from 'react'




function SearchBar({ handleSearchResults, query_URL, params }) {
    

    const inputRef = useRef(null);
    // console.log(import.meta.env.VITE_API_KEY);
    const onSearch = (e) => {
        e.preventDefault();
        const text = inputRef.current.value;
        params.q = text;
        axios.get(query_URL, {
            params: params
        }).then(function (response) {
            handleSearchResults(response.data);
            // console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
    return (
        <div>
            <form onSubmit={onSearch}>
                <input type="text" ref={inputRef}/>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar
import React from 'react'
import axios from 'axios'
import { useRef } from 'react'

const options = {
    method: 'GET',
    url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
    params: {q: 'justin+bieber'},
    headers: {
      'X-RapidAPI-Key': 'ac32b89298msh26c536853145217p14e789jsnce2a243ea65d',
      'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
    }
};

function SearchBar() {

    const inputRef = useRef(null);

    const onSearch = (e) => {
        e.preventDefault();
        const text = inputRef.current.value;
        options.params.q = text;
        axios.request(options).then(function (response) {
            console.log(response.data);
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
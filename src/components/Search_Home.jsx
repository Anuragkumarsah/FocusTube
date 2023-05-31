import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import { useState, useRef } from "react";
import Search_Results from "./Search_Results";

function Search_Home() {
  const query_URL = "https://www.googleapis.com/youtube/v3/search";
  const params = {
    key: import.meta.env.VITE_API_KEY,
    maxResults: 25,
    part: "snippet",
    type: "video",
  };
  const [results, setResults] = useState([]);
  const nextPageRef = useRef(null);
  const prevPageRef = useRef(null);
  const handleSearchResults = (search_results) => {
    nextPageRef.current = search_results.nextPageToken
      ? search_results.nextPageToken
      : null;
    prevPageRef.current = search_results.prevPageToken
      ? search_results.prevPageToken
      : null;
    setResults(search_results.items);
  };
  useEffect(() => {
    console.log(results, nextPageRef.current, prevPageRef.current);
  }, [results]);

  return (
    <div>
      <SearchBar
        handleSearchResults={handleSearchResults}
        params={params}
        query_URL={query_URL}
      />
      {results.length !== 0 && <Search_Results results={results} />}
    </div>
  );
}

export default Search_Home;

import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./MovieList";
import SearchBox from "./SearchBox";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
     axios.get(
      `https://www.omdbapi.com/?s=${searchValue}&apikey=9a7e9844`
    ).then(response => {
      console.log(response.data)
      setMovies(response.data.Search)
    }).catch(err => {
      console.log(err.message)
    })
    
  };

  useEffect(() => {
    getMovies();
  }, [searchValue]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="app">
      <header>
        <div class="logo">MyTestApp</div>
      </header>
      <div class="intro">
        <div class="intro-text">
          Watch <br /> something <br /> incredible.
        </div>
      </div>
      {/*search field starts here */}
      <div class="search-field">
        <div class="search-text">Search</div>
        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
          className="form-control search-box"
        />
      </div>
      <div class="list">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;

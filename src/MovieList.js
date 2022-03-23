import React from "react";
import "./MovieList.css";


function MovieList(props) {

  return (
    <div>
      <div className="container-fluid movie-app">
        <div class="row">
          {props.movies.map((movie) => (
            <>
              <img src={movie.Poster} alt="" />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;

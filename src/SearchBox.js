import React from "react";
import "./App.css";

function SearchBox(props) {

  return (
    <div class="search-field">
      <div class="search-text">Search</div>
      <input
        type="text"
        value={props.Searchvalue}
        onChange={props.handleChange}
        className="form-control search-box"
      />
    </div>
  );
}

export default SearchBox;

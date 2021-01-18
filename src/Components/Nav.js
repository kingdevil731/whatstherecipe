import React from "react";
import axios from "axios";
// api
import { baseSearchUrl } from "../api";

const Nav = ({
  searchQuery,
  setSearchQuery,
  searchResults,
  setSearchResults,
}) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .get(baseSearchUrl(searchQuery))
      .then((data) => setSearchResults(data.data));
    setSearchQuery("");
  };

  return (
    <div className="nav">
      <div className="logo head-title">
        <p>What's My Recipe?</p>
      </div>
      <div className="search sub-title">
        <input
          id="searchInput"
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={onSubmitHandler}>Search</button>
      </div>
      <div className="settings head-title">
        <p>Settings</p>
      </div>
    </div>
  );
};

export default Nav;

import React, { useState } from "react";
// Redux
import { useDispatch } from "react-redux";
// Actions
import { searchRecipes } from "../actions/resultsAction";

const Nav = ({ loaded, setLoaded }) => {
  const dispatch = useDispatch();
  // State
  const [searchQuery, setSearchQuery] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(searchRecipes(searchQuery));
    // Clear the Nav Input/Search
    setLoaded(!loaded);
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

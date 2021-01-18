import React from "react";
// Components
import Recipe from "./Recipe";

const Results = ({ searchResults, setModalUp, modalUp, showModalHandler }) => {
  return (
    <div className="results">
      <div className="results-header sub-title">
        <span className="title">Search Query: {searchResults.q}</span>
        <span className="title">Results Count: {searchResults.count}</span>
      </div>
      {searchResults &&
        searchResults.hits.map((hit) => (
          <Recipe
            key={hit.recipe.label}
            label={hit.recipe.label}
            image={hit.recipe.image}
            calories={hit.recipe.calories}
            totalWeight={hit.recipe.totalWeight}
            totalTime={hit.recipe.totalTime}
            modalUp={modalUp}
            setModalUp={setModalUp}
            showModalHandler={showModalHandler}
            recipe={hit}
          />
        ))}
    </div>
  );
};

export default Results;

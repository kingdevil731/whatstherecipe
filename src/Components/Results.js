import React, { useEffect, useState } from "react";
// Components
import Recipe from "./Recipe";
// animation
import { motion } from "framer-motion";
import { easePopUp } from "../animations";
// Redux
import { useSelector } from "react-redux";

const Results = ({ setModalUp, modalUp, showModalHandler }) => {
  const [searchResults, setSearchResults] = useState(null);
  const state = useSelector((state) => state.results);

  useEffect(() => setSearchResults(state), [state]);
  return (
    <motion.div
      variants={easePopUp}
      animate="show"
      initial="hidden"
      className="results"
    >
      <div className="results-header sub-title">
        <span className="title">Search Query: {searchResults?.query}</span>
        <span className="title">Results Count: {searchResults?.count}</span>
      </div>
      {/* replace searchResults?.more with a more suitable operand */}
      {searchResults?.more &&
        searchResults?.results?.map((hit) => (
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
    </motion.div>
  );
};

export default Results;

import React from "react";

const Recipe = ({
  label,
  image,
  calories,
  totalWeight,
  totalTime,
  modalUp,
  setModalData,
  setModalUp,
  showModalHandler,
  recipe,
}) => {
  return (
    <div className="recipe plex-title">
      <div
        className="recipe-text"
        onClick={() => {
          showModalHandler(recipe.recipe);
        }}
      >
        <h3>{label}</h3>
        <span>Calories : {Math.round(calories)}</span>
        <span>Total Weight : {Math.round(totalWeight)}</span>
        <span>Total time : {totalTime}</span>
      </div>
      <img src={image} alt="recipe img" />
    </div>
  );
};

export default Recipe;

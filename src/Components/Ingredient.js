import React from "react";

const Ingredient = ({ image, ingredient, weight }) => {
  return (
    <div className="ingredient">
      <img className="ingredient-img" src={image} alt="img" />
      <div className="text">
        <span>{ingredient}</span>
        <span>{Math.round(weight)}</span>
      </div>
    </div>
  );
};
export default Ingredient;

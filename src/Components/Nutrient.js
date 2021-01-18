import React from "react";

const Nutrient = ({ label, quantity, unit }) => {
  return (
    <div>
      <span>{label}</span>
      <span>
        {quantity + " "}
        {unit}
      </span>
    </div>
  );
};
export default Nutrient;

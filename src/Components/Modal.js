import React from "react";
// component
import Ingredient from "./Ingredient";
import Digest from "./Digest";
import Nutrient from "./Nutrient";

// TODO Modal to be mobile responsive, currently the first part is broken
const Modal = ({ modalUp, setModalUp, modalData }) => {
  const data = modalData;
  const clickHandler = () => {
    setModalUp(!modalUp);
  };

  return (
    <div class={`container ${modalUp ? " visible " : "not-visible"}`}>
      <div class="modal-content">
        <div class="top">
          <div class="name-large">{data.label}</div>
          <button className="close" onClick={() => clickHandler()}>
            X
          </button>
        </div>
        <div class="bottom">
          <div className="recipe-detailed">
            <div className="row">
              <div className="column">
                <span className="plex-title bold">Description</span>
                <div className="short-description">
                  <span>Calories : {Math.round(data.calories)}</span>
                  <span>Total Weight : {Math.round(data.totalWeight)}</span>
                  <span>Total time : {data.totalTime}</span>
                </div>
                <div className="column">
                  <span className="plex-title bold">Caution</span>
                  <div className="cautionLabel">
                    {data.cautions.map((caution) => (
                      <span> - {caution}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="column">
                <span className="plex-title bold">Diet</span>
                <div className="dietLabel">
                  {data.dietLabels.map((diet) => (
                    <span> - {diet}</span>
                  ))}
                </div>
                <span className="plex-title bold">Health</span>
                <div className="healthLabel">
                  {data.healthLabels.map((health) => (
                    <span> - {health}</span>
                  ))}
                </div>
              </div>
              <img src={data.image} alt={data.label} />
            </div>
            <div className="long-description">
              <div className="ingredients">
                <span className="plex-title bold">Ingredients</span>
                <div className="ingredientsLabel">
                  {data.ingredients.map((ingredient) => (
                    <Ingredient
                      ingredient={ingredient.text}
                      image={ingredient.image}
                      weight={ingredient.weight}
                    />
                  ))}
                </div>
              </div>
              <div className="digest">
                <span className="plex-title bold margin">Digest</span>
                <div className="digestLabel">
                  {data.digest.map((digest) => (
                    <Digest
                      label={digest.label}
                      tag={digest.tag}
                      schemaOrgTag={digest.schemaOrgTag}
                      total={digest.total}
                      hasRDI={digest.hasRDI}
                      daily={digest.daily}
                      unit={digest.unit}
                      sub={digest.sub}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="links">
          <p className="plex-title bold">Links</p>
          <a href={data.uri}>Ontologies</a>
          <a href={data.url}>Source Link</a>
          <a href={data.shareAs}>Shareable Link</a>
        </div>
      </div>
    </div>
  );
};

export default Modal;

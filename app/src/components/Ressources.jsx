import React from "react";

import ressources_json from "../../public/Assets/json/cards/ressources.json";
import besoins_json from "../../public/Assets/json/cards/besoins.json";
import affects_json from "../../public/Assets/json/cards/affects.json";

import "../../public/style/components/ressources.scss";

// Composant carte pour les ressources, affects et besoins
function Ressources({ listTags, setListTags, indexRessource = "ressources" }) {

  const cartes_jsons = {"ressources" : ressources_json, "besoins":besoins_json, "affects":affects_json};
  
  const index_json_0 = cartes_jsons[indexRessource][Object.keys(cartes_jsons[indexRessource])[0]];
  const index_json_1= cartes_jsons[indexRessource][Object.keys(cartes_jsons[indexRessource])[1]];
  const index_json_2 = cartes_jsons[indexRessource][Object.keys(cartes_jsons[indexRessource])[2]];

  return (
    <div className="wys-card">
      <div className="wys-card__categorie">
        <div className="wys-card__subTitle">
          <span className="wys-card__subTitle--red">
            {Object.keys(cartes_jsons[indexRessource])[0]}
          </span>
        </div>
        <div className="wys-card__items wys-card__items--red">
          {buildRenderIndexJson({ indexJSON: index_json_0, listTags, setListTags })}
        </div>
      </div>
      <div className="wys-card__categorie">
        <div className="wys-card__subTitle">
          <span className="wys-card__subTitle--yellow">
            {Object.keys(cartes_jsons[indexRessource])[1]}
          </span>
        </div>
        <div className="wys-card__items wys-card__items--yellow">
          {buildRenderIndexJson({ indexJSON: index_json_1, listTags, setListTags })}
        </div>
      </div>
      <div className="wys-card__categorie">
        <div className="wys-card__subTitle">
          <span className="wys-card__subTitle--blue">
            {Object.keys(cartes_jsons[indexRessource])[2]}
          </span>
        </div>
        <div className="wys-card__items wys-card__items--blue">
          {buildRenderIndexJson({ indexJSON: index_json_2, listTags, setListTags })}
        </div>
      </div>
    </div>
  );

}

function buildRenderIndexJson({ indexJSON, listTags, setListTags }){

  return indexJSON.map((unElem, index) => listTags.includes(unElem) ? (
      <p className="checked" key={index} onClick={(evt) => {
          evt.target.classList.toggle("checked");
          setListTags(listTags.filter((tag) => {
            return tag !== unElem;
          }));
        }}>
        {unElem}
      </p>
    ) : (
      <p key={index} onClick={(evt) => {
          evt.target.classList.toggle("checked");
          setListTags([...listTags, unElem]);
        }}>
        {unElem}
      </p>
    )
  );

} 

export default Ressources;

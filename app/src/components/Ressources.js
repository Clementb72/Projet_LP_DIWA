import React from "react";
import "./ressources.css";
import ressources_json from "../json/cards/ressources.json";
import besoins_json from "../json/cards/besoins.json";
import affects_json from "../json/cards/affects.json";
import 'bootstrap/dist/css/bootstrap.min.css';

// object avec 3 tableaux

function Ressources({ listTags, setListTags, indexRessource = "ressources" }) {
  const cartes_jsons = {"ressources" : ressources_json, "besoins":besoins_json, "affects":affects_json};
  
  const index_json_0 = cartes_jsons[indexRessource][Object.keys(cartes_jsons[indexRessource])[0]];
  const index_json_1= cartes_jsons[indexRessource][Object.keys(cartes_jsons[indexRessource])[1]];
  const index_json_2 = cartes_jsons[indexRessource][Object.keys(cartes_jsons[indexRessource])[2]];


  const elem_index_0= index_json_0.map((unElem, index) =>
    listTags.includes(unElem) ? (
      <p
        className="checked"
        onClick={(evt) => {
          evt.target.classList.toggle("checked");

          setListTags(
            listTags.filter((tag) => {
              return tag !== unElem;
            })
          );
        }}
        key={index}
      >
        {unElem}
      </p>
    ) : (
      <p
        onClick={(evt) => {
          evt.target.classList.toggle("checked");

          setListTags([...listTags, unElem]);
        }}
        key={index}
      >
        {unElem}
      </p>
    )
  );

  const elem_index_1 = index_json_1.map((unElem, index) => listTags.includes(unElem) ? (
    <p
      className="checked"
      onClick={(evt) => {
        evt.target.classList.toggle("checked");

        setListTags(
          listTags.filter((tag) => {
            return tag !== unElem;
          })
        );
      }}
      key={index}
    >
      {unElem}
    </p>
  ) : (
    <p
      onClick={(evt) => {
        evt.target.classList.toggle("checked");

        setListTags([...listTags, unElem]);
      }}
      key={index}
    >
      {unElem}
    </p>
  ));
  const elem_index_2 = index_json_2.map((unElem, index) =>  listTags.includes(unElem) ? (
    <p
      className="checked"
      onClick={(evt) => {
        evt.target.classList.toggle("checked");

        setListTags(
          listTags.filter((tag) => {
            return tag !== unElem;
          })
        );
      }}
      key={index}
    >
      {unElem}
    </p>
  ) : (
    <p
      onClick={(evt) => {
        evt.target.classList.toggle("checked");

        setListTags([...listTags, unElem]);
      }}
      key={index}
    >
      {unElem}
    </p>
  ));

  return (
    <div className="container ">
      <div className="ressources">
        <h1>
          <span className="big-size">R.</span>Ressources
        </h1>
      </div>
      <div className="container_ressources ">
        <div className="qualite">
          <h3 className="color-red">{Object.keys(cartes_jsons[indexRessource])[0]}</h3>
          <div>{elem_index_0}</div>
        </div>
        <div className="valeurs">
          <h3 className="color-yellow">{Object.keys(cartes_jsons[indexRessource])[1]}</h3>
          <div>{elem_index_1}</div>
        </div>
        <div className="habilites">
          <h3 className="color-blue">{Object.keys(cartes_jsons[indexRessource])[2]}</h3>
          <div>{elem_index_2}</div>
        </div>
      </div>
    </div>
  );
}

export default Ressources;

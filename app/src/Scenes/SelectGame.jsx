import React from "react";
import wys_app from "../../public/Assets/images/logo-wys-app.png";
import "../../public/style/select-game.scss";
import { Link } from 'react-router-dom';
import Navigation from "../components/Navigation.jsx";

function SelectGame() {
  return (
    <div className="selectGame">
      <Navigation />
      <div className="parcours-container">
        <div>
          <p>Rétroaction</p>
          <p>Prendre du recul</p>
        </div>
        <div>
          <p>Immersion</p>
          <p>Analyser ses sentiments</p>
        </div>
        <div>
          <p>Conquête</p>
          <p>Penser au futur</p>
        </div>
      </div>
      <Link to="/formulaire" className="button-valider">
          C'est parti !
      </Link>
    </div>
  );

}

export default SelectGame;
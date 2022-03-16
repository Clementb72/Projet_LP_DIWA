import React from "react";
import wys_app from "../../public/Assets/images/logo-wys-app.png";
import "../../public/style/select-game.scss";
import { Link } from 'react-router-dom';

function SelectGame() {
  return (
    <div className="container">
      <img src={wys_app} alt="image_home"></img>
      <h1>WinYourStar vous propose une experience unique à travers un serious game pour vous apprendre à vous connaitre !</h1>
      <div className="main-container">
        <p>Parcours</p>
        <div className="parcours-container">
          <div>
            <p>Conquête</p>
            <p>Penser au futur</p>
          </div>
          <div>
            <p>Immersion</p>
            <p>Analyser ses sentiments</p>
          </div>
          <div>
            <p>Rétroaction</p>
            <p>Prendre du recul</p>
          </div>
        </div>     
      <nav>
        <Link to="/formulaire">
          <p className="button-valider">
              C'est parti !
          </p>        
        </Link>
      </nav> 
      </div>
    </div>
  );

}

export default SelectGame;
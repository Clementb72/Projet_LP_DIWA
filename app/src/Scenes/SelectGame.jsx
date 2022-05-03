import React, { useContext, useEffect, useState } from "react";
import RootStore from '../RootStore.jsx';
import { Link } from 'react-router-dom';
import wys_app from "../../public/Assets/images/logo-wys-app.png";
import "../../public/style/select-game.scss";

function SelectGame() {

  const { typePartieManager } = useContext(RootStore);

  const [acro, setAcro] = useState("SI");
  const [idTypePartie, setIdTypePartie] = useState();

  useEffect(() => {
    typePartieManager.loadTypesPartie();
  }, []);

  const chooseMode = (mode) => {
    setAcro(mode);
    setIdTypePartie(typePartieManager.getTypePartieByAcro(mode).id);
  };

  return (
    <div className="container">
      <img src={wys_app} alt="image_home"></img>
      <h1>WinYourStar vous propose une experience unique à travers un serious game pour vous apprendre à vous connaitre !</h1>
      <div className="main-container">
        <p>Parcours</p>
        <div className="parcours-container">
          <div onClick={(e) => chooseMode("SC")}>
            <p>Conquête</p>
            <p>Penser au futur</p>
          </div>
          <div onClick={(e) => chooseMode("SI")}>
            <p>Immersion</p>
            <p>Analyser ses sentiments</p>
          </div>
          <div onClick={(e) => chooseMode("SR")}>
            <p>Rétroaction</p>
            <p>Prendre du recul</p>
          </div>
        </div>     
      <nav>
        <Link to="/formulaire" state={{idTypePartie: idTypePartie}}>
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
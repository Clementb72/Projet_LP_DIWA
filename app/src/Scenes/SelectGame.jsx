import React, { useContext, useEffect, useState } from "react";
import RootStore from '../RootStore.jsx';
import { Link } from 'react-router-dom';

import Navigation from "../components/Navigation.jsx";

import wys_app from "../../public/Assets/images/logo-wys-app.png";
import illu1 from "../../public/Assets/images/illu1.png";
import illu2 from "../../public/Assets/images/illu2.png";
import illu3 from "../../public/Assets/images/illu3.png";

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
    <div className="selectGame">
      <Navigation />
      <div className="parcoursContainer">
        <div className="parcoursFlex">
        <div className="parcours__Card" onClick={(e) => chooseMode("SR")}>
          <h3>Rétroaction</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus nulla in lacus blandit lacinia. Nunc pharetra, est sit amet lobortis ultricies, sem lectus convallis elit, eget varius erat leo non ex.</p>
        </div>
        <div className="parcours__Card" onClick={(e) => chooseMode("SI")}>
          <h3>Immersion</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus nulla in lacus blandit lacinia. Nunc pharetra, est sit amet lobortis ultricies, sem lectus convallis elit, eget varius erat leo non ex.</p>
        </div>
        <div className="parcours__Card" onClick={(e) => chooseMode("SC")}>
          <h3>Conquête</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus nulla in lacus blandit lacinia. Nunc pharetra, est sit amet lobortis ultricies, sem lectus convallis elit, eget varius erat leo non ex.</p>
        </div>
        </div>
      <Link to="/formulaire" className="buttonValider" state={{idTypePartie: idTypePartie}}>
          Commencer l'aventure !
      </Link>
      </div>
    </div>
  );

}

export default SelectGame;
import React from "react";
import "../../public/style/home.scss";
import astronaut from "../../public/Assets/images/astronaut.png";
import pic from "../../public/Assets/images/se_decouvrir.png";
import se_decouvir from "../../public/Assets/images/se_decouvrir.png";
import { Col, Container, Button, Figure, Row } from "react-bootstrap";
import {Link} from 'react-router-dom';
import Navigation from "../components/Navigation.jsx";

function Home() {

  return (
    <div>
    <div className="homeUpper">
      <Navigation />
      <div className="homeFlex">
      <div className="homePres">
        <h2 className="catchLine">Bienvenue dans la  WYS APP !</h2>
        <p>Un E-Serious Game pour vous permettre de VOUS comprendre et de comprendre les autres !</p>
      </div>
      <img src={astronaut} alt="Astronaut Illustration" className="illuAstro"></img>
      </div>
      <Container fluid="md" className="btnCont">
      <h3>Pour commencer l'aventure :</h3>
        <Row>
          <Col>
            <Link to="login">
              <Button className="bg-white-transparent homeButton">
                Se Connecter
              </Button>
            </Link>
            <Button className="bg-white-transparent homeButton">
              S'inscrire
            </Button>
          </Col>
        </Row>
      </Container>
      <a href="#lowScroll" className="homeCMore">Voir plus<br/>v</a>
    </div>

      <div className="homeLower" id="lowScroll">
        <h2 className="h2Caption">Pourquoi <span className="boldCaption">Wys App ?</span></h2>
        <section className="flexCards">
          <div className="homeCards">
            <h4 className="cardTitle">S'améliorer</h4>
            <img src={pic}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus nulla in lacus blandit lacinia. Nunc pharetra, est sit amet lobortis ultricies, sem lectus convallis elit, eget varius erat leo non ex. </p>
            <a href="https://winyourstar.com/">En savoir plus &#8599;</a>
          </div>
          <div className="homeCards">
            <h4 className="cardTitle">Atteindre ses objectifs</h4>
            <img src={pic}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus nulla in lacus blandit lacinia. Nunc pharetra, est sit amet lobortis ultricies, sem lectus convallis elit, eget varius erat leo non ex. </p>
            <a href="https://winyourstar.com/">En savoir plus &#8599;</a>
          </div>
          <div className="homeCards">
            <h4 className="cardTitle">Se Découvrir</h4>
            <img src={pic}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus nulla in lacus blandit lacinia. Nunc pharetra, est sit amet lobortis ultricies, sem lectus convallis elit, eget varius erat leo non ex. </p>
            <a href="https://winyourstar.com/">En savoir plus &#8599;</a>
          </div>
        </section>
      </div>
      </div>
  );
}

export default Home;

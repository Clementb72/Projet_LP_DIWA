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
            <Link to="register">
              <Button className="bg-white-transparent homeButton">
                S'inscrire
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <a href="#lowScroll" className="homeCMore">Voir plus<br/>v</a>
    </div>

      <div className="homeLower" id="lowScroll">
        <section className="flexCards">
      <div className="homeCards">
            <h4 className="cardTitle">S'améliorer</h4>
            <img src={pic}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus nulla in lacus blandit lacinia. Nunc pharetra, est sit amet lobortis ultricies, sem lectus convallis elit, eget varius erat leo non ex. </p>
            <a href="https://winyourstar.com/">En savoir plus &#8599;</a>
          </div>
          </section>
        <h2 className="h2Caption">Pourquoi <span className="boldCaption">Wys App ?</span></h2>
        <section className="flexCards">
          <div className="homeCards">
            <h4 className="cardTitle">Se découvrir</h4>
            <img src={pic}/>
            <p>Nous pensons que les leaders de demain auront une connaissance précise des fonctionnements émotionnels et relationnels, c'est pourquoi nous avons créé « Win Your Star » un support ludique de coaching qui offre une meilleure connaissance de soi et de sa relation à l'autre.</p>
            
          </div>
          <div className="homeCards">
            <h4 className="cardTitle">Atteindre ses objectifs</h4>
            <img src={pic}/>
            <p>A travers vos expériences personnelles passées, présentes ou futures, ce jeu coopératif pose des questions qui vous aident à explorer vos émotions, à clarifier vos besoins et à activer vos ressources vers l'atteinte de votre nouvel objectif.</p>
           
          </div>
          <div className="homeCards">
            <h4 className="cardTitle">Progresser</h4>
            <img src={pic}/>
            <p>Chaque partie permet de mieux vous comprendre aux niveaux physique, émotionnel et mental et d'anticiper des réactions efficaces face aux nouvelles situations que vous rencontrerez.
</p>
            
          </div>
        </section>
      </div>
      </div>
  );
}

export default Home;

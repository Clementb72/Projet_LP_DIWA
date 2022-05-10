import React from "react";
import "../../public/style/home.scss";
import astronaut from "../../public/Assets/images/astronaut.png";
import decouvrir from "../../public/Assets/images/decouvrir.jpg";
import objectifs from "../../public/Assets/images/objectifs.jpg";
import progresser from "../../public/Assets/images/progresser.png";
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
      <div className="homeCardPres">
            <p><b>Avant de jouer</b><br/><br/>

La création de ce jeu s'est affinée entre 2020 et 2022. Un grand nombre de personnes ont participé à ce projet en le testant, en l'améliorant et en contribuant à son aboutissement.<br/><br/>

Aujourd'hui, notre projet est de recueillir vos réponses anonymes pour entraîner une intelligence artificielle dont les résultats aideront les futurs ingénieurs-managers à mieux encadrer leurs équipes. <br/><br/>

Nous vous remercions de répondre aux questions le plus sincèrement possible. Nous vous sommes très reconnaissants de contribuer à l'aboutissement de cette Web App'.<br/><br/>

<b>Pour vous aider</b><br/><br/>

Si vous avez des questions ou si vous ressentez un besoin de clarification sur la façon de répondre, nous vous encourageons à nous appeler !
Nous sommes là pour vous et nous vous répondrons avec plaisir.<br/>
Merci pour les feedbacks que vous pourrez nous faire sur votre utilisation du jeu jehane@winyourstar.com.<br/><br/>
C'est grâce à votre retour d'expériences que nous pourrons faire progresser l'outil.<br/><br/>
Au plaisir de mieux vous connaître !<br/><br/>
<i>Dorothée Crober</i><br/>
<i>Grégoire Parmentier</i><br/>
<i>Coachs professionnels certifiés – Formateurs en management</i></p>
          </div>
          </section>
        <h2 className="h2Caption">Pourquoi <span className="boldCaption">Wys App ?</span></h2>
        <section className="flexCards">
          <div className="homeCards">
            <h4 className="cardTitle">Se découvrir</h4>
            <img src={decouvrir}/>
            <p>Nous pensons que les leaders de demain auront une connaissance précise des fonctionnements émotionnels et relationnels, c'est pourquoi nous avons créé « Win Your Star » un support ludique de coaching qui offre une meilleure connaissance de soi et de sa relation à l'autre.</p>
            
          </div>
          <div className="homeCards">
            <h4 className="cardTitle">Atteindre ses objectifs</h4>
            <img src={objectifs}/>
            <p>A travers vos expériences personnelles passées, présentes ou futures, ce jeu coopératif pose des questions qui vous aident à explorer vos émotions, à clarifier vos besoins et à activer vos ressources vers l'atteinte de votre nouvel objectif.</p>
           
          </div>
          <div className="homeCards">
            <h4 className="cardTitle">Progresser</h4>
            <img src={progresser}/>
            <p>Chaque partie permet de mieux vous comprendre aux niveaux physique, émotionnel et mental et d'anticiper des réactions efficaces face aux nouvelles situations que vous rencontrerez.
</p>
            
          </div>
        </section>
      </div>
      </div>
  );
}

export default Home;

import React from "react";
import "../../public/style/home.scss";
import wys_app from "../../public/Assets/images/logo-wys-app.png";
import se_decouvir from "../../public/Assets/images/se_decouvrir.png";
import { Col, Container, Button, Figure, Row } from "react-bootstrap";

function Home() {
  console.log(wys_app);

  return (
    <div>
      <img src={wys_app} alt="image_home" className="WYSLogo"></img>
      <p className="brandSent">“Prenez les commandes de votre nouvelle vie”</p>

      <Container fluid="md">
        <Row>
          <Col>
            <Button className="bg-white-transparent homeButton">
              Se Connecter
            </Button>
            <Button className="bg-white-transparent homeButton">
              S'inscrire
            </Button>
          </Col>
        </Row>
        <h2 className="h2Caption">Pourquoi <span className="boldCaption">Wys App ?</span></h2>
      </Container>

      <Container fluid="md">
        <Row className="homeCards">
          <Col>
            <Figure>
              <Figure.Caption>Se découvrir</Figure.Caption>
              <Figure.Image alt="171x180" src={se_decouvir} />
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Caption>Atteindre ses objectifs</Figure.Caption>
              <Figure.Image alt="171x180" src={se_decouvir} />
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Caption>S'Améliorer</Figure.Caption>
              <Figure.Image alt="171x180" src={se_decouvir} />
            </Figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

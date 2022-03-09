import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import "./ressources.css";
import rond from "../images/rond_rouge2.png";
import "@pathofdev/react-tag-input/build/index.css";
import ReactTagInput from "@pathofdev/react-tag-input";
import Ressources from './Ressources';


function Cartes() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showBesoins, setShowBesoins] = useState(false);
  const handleCloseBesoins = () => setShowBesoins(false);
  const handleShowBesoins = () => setShowBesoins(true);

  const [showAffects, setShowAffects] = useState(false);
  const handleCloseAffects = () => setShowAffects(false);
  const handleShowAffects = () => setShowAffects(true);

  // const [showAffects, setShowAffects] = useState(false);
  // const handleShowAffects = () => setShowAffects(true);


  const [listTags, setListTags] = useState([]);

  //const [modalShow, setModalShow] = useState(false);



  return (
    <div>
      <div className="flex">
        <h2>Les ressources</h2>
      </div>
      <div>
        <div>
          {/* <Select value={listTags[0]}/> */}

          <ReactTagInput
            tags={listTags}
            removeOnBackspace={true}
            onChange={(newTags) => {
              console.log(newTags, listTags);
              if (
                !listTags.includes([...newTags].pop()) ||
                listTags.length > newTags.length
              ) {
                setListTags(newTags);
              }
            }}
          />
          {/* <Select value={listTags} isMulti /> */}
        </div>
        <div className="flex">
          <img src={rond} alt="elem"></img>
          <img src={rond} alt="elem"></img>
          <img src={rond} alt="elem"></img>

          

          <Button variant="primary" onClick={handleShow}>
            Carte Ressources
          </Button>

           <Button variant="primary" onClick={handleShowBesoins}>
            Carte Besoins
          </Button> 

          <Button variant="primary" onClick={handleShowAffects}>
            Carte Affects
          </Button> 

          <Modal size='lg' show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Voici toutes les ressources disponibles</Modal.Title>
            </Modal.Header>
            <Modal.Body><Ressources setListTags={setListTags} listTags={listTags} indexRessource={"ressources"}/></Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fermer
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Enregistrer
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal size='lg' show={showBesoins} onHide={handleCloseBesoins}>
            <Modal.Header closeButton>
              <Modal.Title>Voici toutes les ressources disponibles</Modal.Title>
            </Modal.Header>
            <Modal.Body><Ressources setListTags={setListTags} listTags={listTags} indexRessource={"besoins"}/></Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseBesoins}>
                Fermer
              </Button>
              <Button variant="primary" onClick={handleCloseBesoins}>
                Enregistrer
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal size='lg' show={showAffects} onHide={handleCloseAffects}>
            <Modal.Header closeButton>
              <Modal.Title>Voici toutes les ressources disponibles</Modal.Title>
            </Modal.Header>
            <Modal.Body><Ressources setListTags={setListTags} listTags={listTags} indexRessource={"affects"}/></Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseAffects}>
                Fermer
              </Button>
              <Button variant="primary" onClick={handleCloseAffects}>
                Enregistrer
              </Button>
            </Modal.Footer>
          </Modal>
        
        
          {/* <p className="ressources-white">utiliser les ressources</p> */}
          {/* <button onClick={() => setIsOpen(!isOpen)}>Open </button>
         {isOpen && (
           <Ressources setListTags={setListTags} listTags={listTags} />
         )} */}
        </div>
      </div>
    </div>

  );
}

export default Cartes;
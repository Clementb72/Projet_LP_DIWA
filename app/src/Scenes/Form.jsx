import React, { useContext, useEffect, useState } from "react";
import RootStore from '../RootStore.jsx';
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { Radio } from 'antd';
import StepBar from "../components/StepBar.jsx";
import ReactTagInput from "@pathofdev/react-tag-input";
import Ressources from '../components/Ressources.jsx';

// Images
import fuse from '../../public/Assets/images/fuse2.svg';
import rocket from '../../public/Assets/images/chevron-droit.png';
import but from '../../public/Assets/images/but.png';
import imgRessources from '../../public/Assets/images/Game_Ressources.svg';
import imgBesoins from '../../public/Assets/images/Game_Besoin.svg';
import imgAffect from '../../public/Assets/images/Game_Affect.svg';

import questions from '../../public/Assets/json/translation/questions.json';

// Styles
import '../../public/style/style.scss';

function Form() {

    const { partieManager, userManager, typePartieManager } = useContext(RootStore);

    const navigate = useNavigate();

    const location = useLocation();

    const [idTypePartie, setIdTypePartie] = useState(0);
    const [typePartie, setTypePartie] = useState(typePartieManager.getTypePartieById(idTypePartie));
    const [mode, setMode] = useState(typePartie.temps);

    const [answer, setAnswer] = useState(partieManager.initPartie());

    const [nbQuestion, setNbQuestion] = useState(0);

    useEffect(() => {
        // Sécurité si pas connecté
        if (null === userManager.user)
            navigate("/login");
        if (null != location.state) {
            let id = location.state.idTypePartie || 0;
            let typePartie = typePartieManager.getTypePartieById(id);
            let temps = typePartie.temps;
            setIdTypePartie(id);
            setTypePartie(typePartie);
            setMode(temps);
            if (id === 0)
                navigate("/game"); 
        } else // Sécurité si user passe par l'url pour accéder à la page sans avoir séléctionné le mode de jeu
            navigate("/game");            
    }, []);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showBesoins, setShowBesoins] = useState(false);
    const handleCloseBesoins = () => setShowBesoins(false);
    const handleShowBesoins = () => setShowBesoins(true);

    const [showAffects, setShowAffects] = useState(false);
    const handleCloseAffects = () => setShowAffects(false);
    const handleShowAffects = () => setShowAffects(true);

    const [showObjectif, setShowObjectif] = useState(true);
    const [objectif, setObjectif] = useState("");


    const previousPage = () => {
        if (nbQuestion > 0)
            setNbQuestion(nbQuestion - 1)
    }

    const nextPage = () => {
        if (questions[mode].length > nbQuestion + 1){
            setNbQuestion(nbQuestion + 1)
        }else{
            partieManager.savePartie(partieManager.buildPartie(typePartie, answer, userManager.user))
            navigate("/debriefing")
        }
    }

    const changeReponse = (value) => {
        const answerTmp = [...answer];
        answerTmp[nbQuestion].reponse = value;
        setAnswer(answerTmp);
    }

    const changeSatisfaction = (value) => {
        const answerTmp = [...answer];
        answerTmp[nbQuestion].satisfaction = value;
        setAnswer(answerTmp);
    }

    const setListTags = (value) => {
        const answerTmp = [...answer];
        answerTmp[nbQuestion].listTags = value;
        setAnswer(answerTmp);
    }

    return (
        // <Layout>    
        <div className="container bg-dark-blue">
            <div className="stepBar">
                <div onClick={previousPage} className={`container-arrow ${nbQuestion === 0 ? 'disabled' : ''}`}>
                    <img className="arrow-left" src={rocket} alt="rocket"></img>
                    <p>Question précédente</p>
                </div>
                <div className="bar bg-white-transparent border-radius-25">
                    <StepBar current={nbQuestion} />
                </div>
                <div onClick={nextPage} className={`container-arrow ${questions[mode].length === nbQuestion + 1 ? 'disabled' : ''}`}>
                    <p>Question suivante</p>
                    <img className="arrow-right" src={rocket} alt="rocket"></img>
                </div>
            </div>
            <div className="bg-white-transparent border-radius-25 container-2">
                <div className="container-question bg-white-transparent">
                    <p className="question">{nbQuestion + 1 + ' - ' + questions[mode][nbQuestion]}</p>
                    <img onClick={() => setShowObjectif(true)} src={but} alt="objectif" />
                    <Modal className="modal-objectif" size="md" centered show={showObjectif} onHide={() => setShowObjectif(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Objectif</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <label htmlFor="objectif">Quel est votre objectif ?</label>
                            <input value={objectif} onChange={(e) => setObjectif(e.target.value)} type="text" name="objectif" />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowObjectif(false)}>
                                Valider
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className="container-main">
                    <div className="containter-reponse-objectif">
                        <div className="reponse">
                            <label htmlFor="answer">Ma réponse</label>
                            <input name="answer" className="input-answer bg-white-transparent" placeholder="Entrer votre réponse" type="text" value={answer[nbQuestion].reponse} onChange={(e) => changeReponse(e.target.value)}></input>
                        </div>
                        <div className="adjectif">
                            <p>Ressources, Besoins, Affects</p>
                            <div className="input-tag bg-white-transparent">
                                <ReactTagInput tags={answer[nbQuestion].listTags} removeOnBackspace={true} placeholder="Ecrire et presser entrer" onChange={(newTags) => {
                                    if (!answer[nbQuestion].listTags.includes([...newTags].pop()) || answer[nbQuestion].listTags.length > newTags.length) {
                                        setListTags(newTags);
                                    }
                                }} />
                            </div>
                            <div className="button-tag">
                                <p>Aides :</p>
                                <Button variant="primary" onClick={handleShowBesoins}>
                                    <img src={imgAffect} alt="Affect" />
                                    <p>Affect</p>
                                </Button>
                                <Button variant="primary" onClick={handleShowAffects}>
                                    <img src={imgBesoins} alt="Besoins" />
                                    <p>Besoins</p>
                                </Button>
                                <Button variant="primary" onClick={handleShow}>
                                    <img src={imgRessources} alt="Ressources" />
                                    <p>Ressources</p>
                                </Button>
                                <Modal size='lg' show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>R. Ressources</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Ressources setListTags={setListTags} listTags={answer[nbQuestion].listTags} indexRessource={"ressources"} />
                                    </Modal.Body>
                                </Modal>
                                <Modal size='lg' show={showBesoins} onHide={handleCloseBesoins}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>B. Besoins</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Ressources setListTags={setListTags} listTags={answer[nbQuestion].listTags} indexRessource={"besoins"} />
                                    </Modal.Body>
                                </Modal>
                                <Modal size='lg' show={showAffects} onHide={handleCloseAffects}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>A. Affects</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Ressources setListTags={setListTags} listTags={answer[nbQuestion].listTags} indexRessource={"affects"} />
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                        <div className="satisfaction">
                            <p>Satisfaction</p>
                            <Radio.Group value={answer[nbQuestion].satisfaction} onChange={(e) => changeSatisfaction(e.target.value)} buttonStyle="solid" className="radio-group">
                                <Radio.Button value="---">---</Radio.Button>
                                <Radio.Button value="--">--</Radio.Button>
                                <Radio.Button value="-">-</Radio.Button>
                                <Radio.Button value="=">=</Radio.Button>
                                <Radio.Button value="+">+</Radio.Button>
                                <Radio.Button value="++">++</Radio.Button>
                                <Radio.Button value="+++">+++</Radio.Button>
                            </Radio.Group>
                        </div>
                    </div>
                    <img className="imgFuse" src={fuse} alt="fuse"></img>
                </div>
            </div>
        </div>
        //  </Layout>
    )
}

export default Form
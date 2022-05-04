import React, { useContext, useEffect, useState } from "react";
import RootStore from '../RootStore.jsx';
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { Radio } from 'antd';
import StepBar from "../components/StepBar.jsx";
import ReactTagInput from "@pathofdev/react-tag-input";
import Ressources from '../components/Ressources.jsx';

import fuse from '../../public/Assets/images/fuse1.png';
import rocket from '../../public/Assets/images/space-rocket-launch.png';

import questions from '../../public/Assets/json/translation/questions.json';

import '../../public/style/style.scss';

function Form({ mode = "present" }) {

    const { partieManager, userManager } = useContext(RootStore);

    const navigate = useNavigate();

    const [answer, setAnswer] = useState(partieManager.initPartie());

    const [nbQuestion, setNbQuestion] = useState(0);

    useEffect(() => {
        // Sécurité si pas connecté
        if (null === userManager.user) {
            navigate("/login");
        }
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

    const previousPage = () => {
        if (nbQuestion > 0)
            setNbQuestion(nbQuestion - 1)
    }

    const nextPage = () => {
        if (questions[mode].length > nbQuestion + 1){
            setNbQuestion(nbQuestion + 1)
        }else{
            partieManager.savePartie(partieManager.buildPartie("SC", answer, userManager.user))
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
            <div className="bg-white-transparent border-radius-25 stepBar"><StepBar current={nbQuestion} /></div>
            <div className="bg-white-transparent border-radius-25 container-2">
                <div className="container-question bg-white-transparent">
                    <div className="circle bg-yellow"></div>
                    <p className="question">{questions[mode][nbQuestion]}</p>
                </div>
                <div className="container-main">
                    <div className="containter-reponse-objectif">
                        <div className="reponse">
                            <label htmlFor="answer">Ma réponse</label>
                            <input name="answer" className="input-answer bg-white-transparent" placeholder="Entrer votre réponse" type="text" value={answer[nbQuestion].reponse} onChange={(e) => changeReponse(e.target.value)}></input>
                        </div>
                        <div className="adjectif">
                            <p>Adjectifs</p>
                            <div className="input-tag bg-white-transparent">
                                <ReactTagInput tags={answer[nbQuestion].listTags} removeOnBackspace={true} placeholder="Ecrire et presser entrer" onChange={(newTags) => {
                                    if (!answer[nbQuestion].listTags.includes([...newTags].pop()) || answer[nbQuestion].listTags.length > newTags.length) {
                                        setListTags(newTags);
                                    }
                                }} />
                            </div>
                            <div className="button-tag">
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
                            <Radio.Group value={answer[nbQuestion].satisfaction} onChange={(e) => changeSatisfaction(e.target.value) } buttonStyle="solid" className="radio-group">
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
            <div className="container-arrow">
                <img onClick={previousPage} className="arrow-left" src={rocket} alt="rocket"></img>
                <img onClick={nextPage} className="arrow-right" src={rocket} alt="rocket"></img>
            </div>
        </div>
        //  </Layout>
    )
}

export default Form
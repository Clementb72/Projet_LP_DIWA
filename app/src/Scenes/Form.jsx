import React, { useState } from "react";
import axios from 'axios';
import { Radio } from 'antd';
import StepBar from "../components/StepBar.jsx";
import ReactTagInput from "@pathofdev/react-tag-input";
import Ressources from '../components/Ressources.jsx';

import fuse from '../../public/Assets/images/fuse1.png';
import rocket from '../../public/Assets/images/space-rocket-launch.png';

import questions from '../../public/Assets/json/translation/questions.json';

import '../../public/style/style.scss';
import { Button, Modal } from "react-bootstrap";

function Form({ mode = "present" }) {

    const [answer, setAnswer] = useState([{
        reponse: "",
        satisfaction: ""
    }, {
        reponse: "",
        satisfaction: ""
    }, {
        reponse: "",
        satisfaction: ""
    }, {
        reponse: "",
        satisfaction: ""
    }, {
        reponse: "",
        satisfaction: ""
    }, {
        reponse: "",
        satisfaction: ""
    }, {
        reponse: "",
        satisfaction: ""
    }, {
        reponse: "",
        satisfaction: ""
    }, {
        reponse: "",
        satisfaction: ""
    },
    ]);
    
    const [nbQuestion, setNbQuestion] = useState(0);

    const [listTags, setListTags] = useState([]);

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
        if (questions[mode].length > nbQuestion + 1) {
            setNbQuestion(nbQuestion + 1)
        } else {
            var i = 0;
            var id = '{"1":'
            var string = '{';
            for (const a in answer) {
                i++
                string += '"question' + i + '":"' + answer[a].reponse + '",';
            }

            var virgule = string.lastIndexOf(',');
            string = string.substring(0, virgule)
            string += '}}'
            string = id + string
            var reponseJson = string.replace(/:\s*[^"0-9.]*([0-9.]+)/g, ':"$1"');

            let formData = new FormData();
            formData.append('type_partie', 'SC');
            formData.append('reponses', reponseJson);
            formData.append('users', [1,2]);

            axios.post('http://127.0.0.1:8080/api/partie', formData).then(function(response){
                console.log(response.data)
            }).catch(function(error){
                console.log(error.response.data)
            })

            // axios.get('http://127.0.0.1:8080/api/parties').then(e => console.log(e));
        }
    }
    
    const changeSatisfaction = (value) => {
        const answerTmp = [...answer]
        answerTmp[nbQuestion] = {
            satisfaction: value
        }
        setAnswer(answerTmp)
    }

    return (
        // <Layout>    
        <div className="container bg-dark-blue">
            <div className="bg-white-transparent border-radius-25 stepBar"><StepBar current={nbQuestion}/></div>
            <div className="bg-white-transparent border-radius-25 container-2">
                <div className="container-question bg-white-transparent">
                    <div className="circle bg-yellow"></div>
                    <p className="question">{questions[mode][nbQuestion]}</p>
                </div>
                <div className="container-main">
                    <div className="containter-reponse-objectif">
                        <div className="reponse">
                            <label htmlFor="answer">Ma réponse</label>
                            <input name="answer" className="input-answer bg-white-transparent" placeholder="Entrer votre réponse" type="text" value={answer[nbQuestion].reponse} onChange={(e) => changeSatisfaction(e.target.value)}></input>
                        </div>
                        <div className="adjectif">
                            <p>Adjectifs</p>
                            <div className="input-tag bg-white-transparent">
                                <ReactTagInput tags={listTags} removeOnBackspace={true} onChange={(newTags) => {
                                    if (!listTags.includes([...newTags].pop()) || listTags.length > newTags.length) {
                                        setListTags(newTags);
                                    }
                                }}/>
                            </div>
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
                                <Modal.Body>
                                    <Ressources setListTags={setListTags} listTags={listTags} indexRessource={"ressources"}/>
                                </Modal.Body>
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
                                <Modal.Body>
                                    <Ressources setListTags={setListTags} listTags={listTags} indexRessource={"besoins"}/>
                                </Modal.Body>
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
                                <Modal.Body>
                                    <Ressources setListTags={setListTags} listTags={listTags} indexRessource={"affects"}/>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseAffects}>
                                        Fermer
                                    </Button>
                                    <Button variant="primary" onClick={handleCloseAffects}>
                                        Enregistrer
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                        <div className="satisfaction">
                            <p>Satisfaction</p>
                            <Radio.Group value={answer[nbQuestion].satisfaction} onChange={(e) => {changeSatisfaction(e.target.value)}} buttonStyle="solid" className="radio-group">
                                <Radio.Button value="---">---</Radio.Button>
                                <Radio.Button value="--">--</Radio.Button>
                                <Radio.Button value="-">-</Radio.Button>
                                <Radio.Button value="=">=</Radio.Button>
                                <Radio.Button value="+">+</Radio.Button>
                                <Radio.Button value="++">++</Radio.Button>*-
                                <Radio.Button value="+++">+++</Radio.Button>
                            </Radio.Group>
                        </div>
                        <img className="imgFuse" src={fuse} alt="fuse"></img>
                    </div>
                </div>
                <div className="container-arrow">
                    <div onClick={previousPage} className="arrow-left">&#10148;</div>
                    <div onClick={nextPage} className="arrow-right">&#10148;</div>
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
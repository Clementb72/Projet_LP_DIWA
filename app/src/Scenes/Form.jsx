import React, { useState } from "react";
import fuse from '../../public/Assets/images/fuse1.png';
import rocket from '../../public/Assets/images/space-rocket-launch.png';
import StepBar from "../components/StepBar.jsx";
import axios from 'axios';
import InputTag from "../components/InputTag.jsx";
import { Radio } from 'antd';

import '../../public/style/style.scss';

const question = [
    "Qu’est ce qui est stimulant pour vous pour atteindre l’objectif ?",
    "Quelles qualités vous seront nécessaires pour l’atteinte de l’objectif ?",
    "Au fond de vous, qu’est-ce que vous souhaiter vraiment à travers cet objectif ?",
    "Qu’est-ce que vous avez envie de faire pour le projet ?",
    "Quels moyens techniques, humains pouvez vous mobiliser pour atteindre l’objectif ?",
    "Concernant les indicateurs, à quoi savez vous que vous avancer vers vos objectifs ?",
    "Quel est le principal obstacle qui vous empêche d’avancer ?",
    "Face à cet obstacle, quel danger percevez vous ? et dans quelle émotion ça vous mets ? ",
    "Quelle est la réaction positive pour surmonter l’obstacle ?"
]

function Form() {

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
    
    const [nbQuestion, setNbQuestion] = useState(0)

    const previousPage = () => {
        if (nbQuestion > 0)
            setNbQuestion(nbQuestion - 1)
    }

    const nextPage = () => {
        if (question.length > nbQuestion + 1) {
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
                    <p className="question">{question[nbQuestion]}</p>
                </div>
                <div className="container-main">
                    <div className="containter-reponse-objectif">
                        <div className="reponse">
                            <label htmlFor="answer">Ma réponse</label>
                            <input name="answer" className="input-answer bg-white-transparent" placeholder="Entrer votre réponse" type="text" value={answer[nbQuestion].reponse} onChange={(e) => changeSatisfaction(e.target.value)}></input>
                        </div>
                        <div className="adjectif">
                            <p>Adjectifs</p>
                            <div className="input-tag bg-white-transparent">  <InputTag></InputTag> </div>
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
import React, { useState } from "react";
import fuse from '../Assets/images/fuse1.png'
import StepBar from "../components/StepBar";
import Layout from "../components/Layout"
import '../Css/style.css'

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
        reponse: ""
    }, {
        reponse: ""
    }, {
        reponse: ""
    }, {
        reponse: ""
    }, {
        reponse: ""
    }, {
        reponse: ""
    }, {
        reponse: ""
    }, {
        reponse: ""
    }, {
        reponse: ""
    },
    ]);
    const [nbQuestion, setNbQuestion] = useState(0)

    const previousPage = () => {
        if (nbQuestion > 0)
            setNbQuestion(nbQuestion - 1)
    }

    const nextPage = () => {
        if (question.length > nbQuestion + 1)
            setNbQuestion(nbQuestion + 1)
    }

    const changeAnswer = (value) => {
        const answerTmp = [...answer]
        answerTmp[nbQuestion] = {
            reponse: value
        }
        setAnswer(answerTmp)
    }

    const input = document.querySelector('.input-answer')
    const targetInput = () => {
        input.click()
    }

    var i = 0;
    var id = '{"1":'
    var string = '{';
    for (const a in answer) {
        i++
        string += '"question"' + i + '" :"' + reponse[a].reponse + '",';
    }
    string += '"}}"'

    console.log(id + string);


    return (
        // <Layout>    
        <div className="container bg-dark-blue">
            <div className="bg-white-transparent border-radius-25 stepBar"><StepBar /></div>
            <div className="bg-white-transparent border-radius-25 container-2">
                <div className="container-question">
                    <div className="circle bg-yellow"></div>
                    <p className="question">{question[nbQuestion]}</p>
                </div>
                <div className="container-main">
                    <div className="containter-reponse-objectif">
                        <div onClick={targetInput} className="reponse bg-white-transparent border-radius-25">
                            <p>Ma réponse</p>
                            <input className="input-answer" placeholder="Entrer votre réponse" type="text" value={answer[nbQuestion].reponse} onChange={(e) => changeAnswer(e.target.value)}></input>
                        </div>
                        <div className="adjectif bg-white-transparent border-radius-25">
                            <p>Adjectifs</p>
                        </div>
                    </div>
                    <img className="imgFuse" src={fuse} alt="fuse"></img>
                </div>
            </div>
            <div className="container-arrow">
                <div onClick={previousPage} className="arrow-left">&#10148;</div>
                <div onClick={nextPage} className="arrow-right">&#10148;</div>
            </div>
        </div>

        //  </Layout>
    )
}

export default Form
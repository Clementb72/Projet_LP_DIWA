import React, { useContext } from "react";
import RootStore from '../RootStore.jsx';


function Debriefing() {
    const { partieManager } = useContext(RootStore);

    const submit = () => {
        partieManager.sendPartie(partieManager.getPartieEnCours()).then(() => {
            console.log("SUBMIT");
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <>
            <h1 className="reviewTitle">Debriefing</h1>
            
            <button onClick={submit}  className="sendResult">Envoyer les résutats</button>
            <div className="review">
                <div className="answerBlock">
                <h3 className="titre_propulsion">Propulsion</h3>
                <div  className="answerFlex">
                {
                    partieManager.getPartieEnCours().reponses.map((partie, index) => {
                        if (index >= 0 && index <= 2) {
                            return (
                                <div className="propulsion" key={index}>
                                    <p className="questionTitle">Question {index + 1}</p>
                                    <p> Réponse :<br/>{partie.reponse}<br/></p>
                                    <p> Satisfaction :<br/>{partie.satisfaction}<br/></p>
                                    <p> Adjectifs :<br/> {partie.listTags.length > 0 ?
                                        partie.listTags.map((tag) => {
                                            return (
                                                tag + ' '
                                            )
                                        }) : ""} <br/></p>
                                </div>
                            )
                        }
                    })
                }
                </div>
                </div>
                <div className="answerBlock">
                <h3 className="titre_expedition">Expedition</h3>
                <div  className="answerFlex">
                {
                    partieManager.getPartieEnCours().reponses.map((partie, index) => {
                        if (index >= 3 && index <= 5) {
                            return (
                                <div className="expedition" key={index}>
                                    <p className="questionTitle">Question {index + 1}</p>
                                    <p> Réponse :<br/> {partie.reponse}<br/></p>
                                    <p> Satisfaction :<br/>{partie.satisfaction}<br/></p>
                                    <p> Adjectifs :<br/> {partie.listTags.length > 0 ?
                                        partie.listTags.map((tag) => {
                                            return (
                                                tag + ' '
                                            )
                                        }) : ""} <br/></p>
                                </div>
                            )
                        }
                    })
                }
                </div>
                </div>
                <div className="answerBlock">
                <h3 className="titre_exploration">Exploration</h3>
                <div  className="answerFlex">
                {
                    partieManager.getPartieEnCours().reponses.map((partie, index) => {
                        if (index >= 6 && index <= 8) {
                            return (
                                <div className="exploration" key={index}>
                                    <p className="questionTitle">Question {index + 1}</p>
                                    <p> Réponse : <br/>{partie.reponse}<br/></p>
                                    <p> Satisfaction :<br/>{partie.satisfaction}<br/></p>
                                    <p> Adjectifs :<br/> {partie.listTags.length > 0 ?
                                        partie.listTags.map((tag) => {
                                            return (
                                                tag + ' '
                                            )
                                        }) : ""} <br/></p>
                                </div>
                            )
                        }
                    })
                }
                </div>
                </div>
            </div>

        </>
    );

}

export default Debriefing;
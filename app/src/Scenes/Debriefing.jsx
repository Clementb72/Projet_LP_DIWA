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
            <h1>Debriefing</h1>
            <div className="container">
                <h3 className="titre_propulsion">Propulsion</h3>
                {
                    partieManager.getPartieEnCours().reponses.map((partie, index) => {
                        if (index >= 0 && index <= 2) {
                            return (
                                <div className="propulsion" key={index}>
                                    <p>Question {index + 1}</p>
                                    <p> Réponse : {partie.reponse}</p>
                                    <p> Satisfaction :{partie.satisfaction}</p>
                                    <p> Adjectifs : {partie.listTags.length > 0 ?
                                        partie.listTags.map((tag) => {
                                            return (
                                                tag + ' '
                                            )
                                        }) : ""} </p>
                                </div>
                            )
                        }
                    })
                }

                <h3 className="titre_expedition">Expedition</h3>
                {
                    partieManager.getPartieEnCours().reponses.map((partie, index) => {
                        if (index >= 3 && index <= 5) {
                            return (
                                <div className="expedition" key={index}>
                                    <p>Question {index + 1}</p>
                                    <p> Réponse : {partie.reponse}</p>
                                    <p> Satisfaction :{partie.satisfaction}</p>
                                    <p> Adjectifs : {partie.listTags.length > 0 ?
                                        partie.listTags.map((tag) => {
                                            return (
                                                tag + ' '
                                            )
                                        }) : ""} </p>
                                </div>
                            )
                        }
                    })
                }

                <h3 className="titre_exploration">Exploration</h3>
                {
                    partieManager.getPartieEnCours().reponses.map((partie, index) => {
                        if (index >= 6 && index <= 8) {
                            return (
                                <div className="exploration" key={index}>
                                    <p>Question {index + 1}</p>
                                    <p> Réponse : {partie.reponse}</p>
                                    <p> Satisfaction :{partie.satisfaction}</p>
                                    <p> Adjectifs : {partie.listTags.length > 0 ?
                                        partie.listTags.map((tag) => {
                                            return (
                                                tag + ' '
                                            )
                                        }) : ""} </p>
                                </div>
                            )
                        }
                    })
                }
            </div>

            <button onClick={submit}>VALIDER</button>
        </>
    );

}

export default Debriefing;
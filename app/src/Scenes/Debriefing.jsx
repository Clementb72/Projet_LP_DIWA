import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import RootStore from '../RootStore.jsx';


function Debriefing() {
    const { partieManager, userManager } = useContext(RootStore);

    const submit = () => {
        // partieManager.sendPartie(partieManager.buildPartie("SC", partieManager.getPartieEnCours().reponses, userManager.user))
        console.log("SUBMIT");
        console.log(partieManager.buildPartie("SC", partieManager.getPartieEnCours().reponses, userManager.user));
        console.log(partieManager.sendPartie(partieManager.buildPartie("SC", partieManager.getPartieEnCours().reponses, userManager.user)));
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
                                <>
                                    <div className="propulsion">
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
                                </>
                            )
                        }
                    })
                }

                <h3 className="titre_expedition">Expedition</h3>
                {
                    partieManager.getPartieEnCours().reponses.map((partie, index) => {
                        if (index >= 3 && index <= 5) {
                            return (
                                <>
                                    <div className="expedition">
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
                                </>
                            )
                        }
                    })
                }

                <h3 className="titre_exploration">Exploration</h3>
                {
                    partieManager.getPartieEnCours().reponses.map((partie, index) => {
                        if (index >= 6 && index <= 8) {
                            return (
                                <>
                                    <div className="exploration">
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
                                </>
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
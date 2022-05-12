import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import RootStore from '../RootStore.jsx';


function FormEnd() {

    const navigate = useNavigate();

    const { partieManager } = useContext(RootStore);

    const [state, setState] = React.useState({
        choix1: "",
    })

    const handleChange = (e) => {
        setState((prevValue) => {
            return {
                ...prevValue,
                [e.target.name]: e.target.value,
            };
        });
    }

    const submit = (e) => {
        e.preventDefault();
        partieManager.getPartieEnCours().debriefing = state;
        navigate("/debriefing");
    }

    return (
        <>
            <form onSubmit={submit} className="formEnd">
            <h1>Debriefing</h1>
            <p>De toute cette expérience, que retiendrez-vous de très positif de vous ? Avez-vous eu de nouvelles prises de conscience ? Si oui, lesquelles ? Quel va être votre premier pas vers l’atteinte de votre objectif ? Quand allez-vous le faire ?</p>
            <form onSubmit={submit}>
                <input type="text" name="choix1" value={state.choix1} onChange={handleChange} />
                <input type="submit" value="Valider" />
            </form>
        </>
    );

}

export default FormEnd;
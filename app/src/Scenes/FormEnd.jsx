import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import RootStore from '../RootStore.jsx';


function FormEnd() {

    const navigate = useNavigate();

    const { partieManager } = useContext(RootStore);

    const [state, setState] = React.useState({
        choix1: "",
        choix2: "",
        choix3: ""
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
            <h1>Debriefing</h1>
            <p>Citer 3 mots ( sentiments, émotions ) qui ont marqué votre partie</p>
            <form onSubmit={submit}>
                <input type="text" name="choix1" value={state.choix1} onChange={handleChange} />
                <input type="text" name="choix2" value={state.choix2} onChange={handleChange} />
                <input type="text" name="choix3" value={state.choix3} onChange={handleChange} />
                <input type="submit" value="Valider" />
            </form>
        </>
    );

}

export default FormEnd;
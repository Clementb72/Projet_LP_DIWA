import React, { useState, useEffect, useContext } from "react";
import RootStore from '../RootStore.jsx';
import { Alert } from "react-bootstrap";
import axios from "axios";


import { useNavigate } from "react-router-dom";


// Styles
import ProfilStyles from "../../public/style/profil.scss";

const Profil = () => {

    const navigate = useNavigate();
    const { userManager } = useContext(RootStore);
    const [show, setShow] = useState(false);
    const [isValidForm, setValidForm] = useState(false);
    const [isCheckValid, setCheckIsValid] = useState(true);
    const [isPwdValid, setPwdIsValid] = useState(true);
    const [isEditable, setEditable] = useState(false);
    const [state, setState] = useState({
        nom: userManager.user?.nom,
        prenom: userManager.user?.prenom,
        email: userManager.user?.email,
        password: "",
        mdpOk: "",
        check: false,
    });  

    
    useEffect(() => {
        // Sécurité si pas connecté
        if (null === userManager.user)
            navigate("/login");
    }, []);

    const handleChange = (event) => {
        /* <input type="text" name="prenom" placeholder="Prénom" pattern="^[A-Z][a-z]*|^[a-z]*" required=""> correspond a une target*/
        const target = event.target;
        /* value correspond aux valeurs des variables de type soit text soit cheked*/
        const value = target.type === "checkbox" ? target.checked : target.value;
        /*name correspond aux noms des variables complétées à l instant t (nom, prenom,email, password,mdpOk,check)*/
        const name = target.name;
        setState((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
        if (name === "mdpOk") {
            if (value === state.password) {
                setPwdIsValid(true);
            } else {
                setPwdIsValid(false);
            }
        }
    };

    const submit = (event) => {

        event.preventDefault();

        setShow(false);
        setValidForm(false);

        if (state.password === state.mdpOk) {
            setCheckIsValid(true);
            axios
                .post("/api/updateProfil", {
                    id: userManager.user.id,
                    nom: state.nom,
                    prenom: state.prenom,
                    mail: state.email,
                    password: state.password,
                })
                .then((response) => {
                    console.log(response);
                    setValidForm(true);
                })
                .catch((error) => {
                    setShow(true);
                    console.error(error);
                });
        }
    };

    return (
        <div className="profil-container">
            <div className="main-container">
                <h1>Profil</h1>
                <div className="content">
                    {isValidForm ? <Alert variant="success">Inscription réussie</Alert> : ""}
                    {isPwdValid ? (
                        ""
                    ) : (
                        <Alert variant="danger">
                            Attention les mots de passes sont différents
                        </Alert>
                    )}
                    {isCheckValid ? (
                        ""
                    ) : (
                        <Alert variant="danger">
                            Vous devez accepter nos conditions générales de vente
                        </Alert>
                    )}
                    {show ? (
                        <Alert variant="danger">
                            Erreur lors de l'inscription, vérifiez que toutes les données sont
                            complétées
                        </Alert>
                    ) : (
                        ""
                    )}
                    <form onSubmit={submit}>
                        <div className="content-form">


                            <div className="profil-info">
                                <label htmlFor="nom">Nom</label>
                                <input
                                    type="text"
                                    name="nom"
                                    placeholder="Nom"
                                    defaultValue={state.nom}
                                    value={state.value}
                                    pattern="^[A-Z][a-z]*|^[a-z]*"
                                    onChange={handleChange}
                                    disabled={!isEditable}
                                    title=""
                                    onInvalid={(e) =>
                                        e.target.setCustomValidity(
                                            "Le nom doit contenir uniquement des lettres"
                                        )
                                    }
                                    onInput={(e) => e.target.setCustomValidity("")}
                                    required="required"
                                />
                            </div>
                            <div className="profil-info">
                                <label htmlFor="prenom">Prenom</label>
                                <input
                                    type="text"
                                    name="prenom"
                                    placeholder="Prénom"
                                    defaultValue={state.prenom}
                                    disabled={!isEditable}
                                    value={state.value}
                                    onChange={handleChange}
                                    pattern="^[A-Z][a-z]*|^[a-z]*"
                                    onInvalid={(e) =>
                                        e.target.setCustomValidity(
                                            "Le prénom contient uniquement des lettres sans accents"
                                        )
                                    }
                                    onInput={(e) => e.target.setCustomValidity("")}
                                    required
                                />
                            </div>
                            <div className="profil-info">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={state.email}
                                    value={state.value}
                                    disabled={!isEditable}
                                    placeholder="Email"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="profil-info">
                                <label htmlFor="password">Mot de passe</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={state.value}
                                    placeholder="Mot de passe"
                                    onChange={handleChange}
                                    disabled={!isEditable}
                                    pattern="^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$"
                                    onInvalid={(e) =>
                                        e.target.setCustomValidity(
                                            "Le mot de passe doit contenir au moins 1 chiffre, 1 majuscule, 1 caractère spécial"
                                        )
                                    }
                                    onInput={(e) => e.target.setCustomValidity("")}
                                    required
                                />
                            </div>
                            {
                                isEditable && <div className="profil-info">
                                    <label htmlFor="mdpOk">Confirmation du mot de passe</label>
                                    <input
                                        type="password"
                                        name="mdpOk"
                                        value={state.value}
                                        disabled={!isEditable}
                                        placeholder="Confirmation mot de passe :"
                                        onChange={handleChange}
                                        pattern="^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$"
                                        required
                                    />
                                </div>
                            }
                        </div>
                        {
                            isEditable ? (
                                <>
                                    <button onClick={() => setEditable(false)} className="btn btn-cancel">Annuler</button>
                                    <button className="btn btn-update" type="submit">Valider</button>
                                </>
                            ) : (
                                <button onClick={() => setEditable(true)} className="btn btn-update">Modifier</button>
                            )

                        }

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profil;
import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";

import "../../public/style/registration.scss";

function Registration() {
  const [show, setShow] = useState(false);
  const [isValidForm, setValidForm] = useState(false);
  const [isCheckValid, setCheckIsValid] = useState(true);
  const [isPwdValid, setPwdIsValid] = useState(true);
  const [state, setState] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    mdpOk: "",
    check: false,
  });

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
      if (state.check) {
        setCheckIsValid(true);
        axios
          .post("http://127.0.0.1:8080/api/register", {
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
    }
  };

  return (
    <div className="formRegistration">
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
      <div className="inputGroup">
        <h2>Inscription</h2>
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={state.value}
          pattern="^[A-Z][a-z]*|^[a-z]*"
          onChange={handleChange}
          title=""
          onInvalid={(e) =>
            e.target.setCustomValidity(
              "Le nom doit contenir uniquement des lettres"
            )
          }
          onInput={(e) => e.target.setCustomValidity("")}
          required="required"
        />
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
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

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange={handleChange}
          pattern="^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$"
          onInvalid={(e) =>
            e.target.setCustomValidity(
              "Le mot de passe doit contenir au moins 1 chiffre, 1 majuscule, 1 caractère spécial"
            )
          }
          onInput={(e) => e.target.setCustomValidity("")}
          required
        />
        <input
          type="password"
          name="mdpOk"
          placeholder="Confirmation"
          onChange={handleChange}
          pattern="^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$"
          required
        />
        <label  className="CGV">
          <input type="checkbox" name="check" onChange={handleChange} />
          J'ai lu et j'accepte les CGV
        </label>
        </div>
        <input type="submit" value="Créer un compte" className="btn"/>
      </form>
    </div>
  );
}

export default Registration;

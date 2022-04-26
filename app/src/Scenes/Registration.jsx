import React, { useState } from "react";
import axios from "axios";

function Registration() {
  const [state, setState] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    mdpOk: "",
    check: false,
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setState((prevValue) => {
        return {
            ...prevValue,
            [name]: value,
        };
    });

};

  const submit = (event) => {
    event.preventDefault();
    if (state.password === state.mdpOk) {
      if (state.check) {
        axios.post("http://127.0.0.1:8080/api/register", {
          nom: state.nom,
          prenom: state.prenom,
          mail: state.email,
          password: state.password,
        });
      }
    } else {
      return false;
    }
  };

  return (
    <div className="formRegistration">
      <form onSubmit={submit}>
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={state.value}
          onChange={handleChange}
        />
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange={handleChange}
        />
        <input
          type="password"
          name="mdpOk"
          placeholder="Confirmation mot de passe :"
          onChange={handleChange}
        />
        <div>
          <label>
            <input type="checkbox" name="check" onChange={handleChange} />
            J'ai lu et j'accepte les CGV
          </label>
        </div>
        <input type="submit" value="Créer un compte" />
      </form>
    </div>
  );
}

export default Registration;

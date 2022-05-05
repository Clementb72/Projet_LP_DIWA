import React, { useContext, useState } from "react";
import RootStore from '../RootStore.jsx';
import { Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function LoginForm() {

    const { userManager } = useContext(RootStore);

    const [formValue, setformValue] = useState({
        username: '',
        password: '',
    });
    const [display, setDisplay] = useState(false);
    const navigate = useNavigate();

    const submit = (e) => {

        e.preventDefault();

        userManager.connexion(formValue.username, formValue.password).then((response) => {
            if (response.status === 200)
                navigate("/game");
            else
                throw new Error('La connexion a échoué');
        }).catch((err) => {
            setDisplay(true);
        });

    }

    const handleChange = (e) => {
        setformValue({
            ...formValue,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <div className="formLogin">
                {
                    display ?
                        <Alert variant='danger'>Erreur lors de la connexion, vérifier vos identifiants.</Alert>
                        : ''
                }
                <form onSubmit={submit} className="login">
                    <div className="bg-white-transparent">
                        <input type="text" name="username" placeholder="Login" value={formValue.username} onChange={handleChange} />
                        <input type="password" name="password" placeholder="Mot de passe" value={formValue.password} onChange={handleChange} />
                    </div>
                    <nav>
                        <button type="submit" className="btn btn">Connexion</button>
                    </nav>
                </form>
            </div>
        </>
    )
}

export default LoginForm
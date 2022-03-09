import React, { useState } from "react";
import axios, { Axios } from 'axios';
import { Alert } from 'react-bootstrap';


function LoginForm() {

    const [formValue, setformValue] = useState({
        username: '',
        password: '',
    })

    const [display, setDisplay] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        const data = {
            username: formValue.username,
            password: formValue.password
        }

        const headers = {
            'Content-Type': 'application/json'
        }
        var login = axios.post("http://127.0.0.1:8080/api/login", data, {
            headers: headers
        })
            .then((response) => {
                sessionStorage.setItem("user", response.data.user)
                sessionStorage.setItem("token_user", response.data.token)
                console.log("token : " + sessionStorage.getItem("token_user"));
            })
            .catch((error) => {
                setDisplay(true);
                console.log(display);
                console.log(error.response.data)
            })
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
                    <button type="submit" className="btn btn">Connexion</button>
                </form>
            </div>
        </>
    )
}

export default LoginForm
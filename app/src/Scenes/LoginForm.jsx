import React from "react";
import axios, { Axios } from 'axios';

function submit(e){
    e.preventDefault();
    var login = axios.get("http://127.0.0.1:8080/api/login");
    console.log(login);
}

function LoginForm() {
    return (
        <div className="formLogin">
            <form onSubmit={submit}>
                <label htmlFor="login">Login</label>
                <input type="text" />
                <button type="submit" className="btn btn">Se connecter</button>
            </form>
        </div>
    )
}

export default LoginForm
import { makeAutoObservable } from 'mobx';

class User {

    _id;
    _nom;
    _prenom;
    _email;
    _roles;
    _token;

    constructor(id, nom, prenom, email, roles, token) {
        makeAutoObservable(this);
        this._id = id;
        this._nom = nom;
        this._prenom = prenom;
        this._email = email;
        this._roles = roles;
        this._token = token;
    }

    get id() {
        return this._id;
    }

    get nom() {
        return this._nom;
    }

    get email() {
        return this._email;
    }

    get roles() {
        return this._roles;
    }

    get token() {
        return this._token;
    }

}

export default User;
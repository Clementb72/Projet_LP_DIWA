import { makeAutoObservable } from 'mobx';

class User {

    _id;
    _nom;
    _prenom;
    _email;
    _roles;
    _token;
    _dateDeNaissance;
    _telephone;

    constructor(id, nom, prenom, email, roles, token,dateDeNaissance,telephone) {
        makeAutoObservable(this);
        this._id = id;
        this._nom = nom;
        this._prenom = prenom;
        this._email = email;
        this._roles = roles;
        this._token = token;
        this._dateDeNaissance = dateDeNaissance;
        this._telephone = telephone;
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
    get dateDeNaissance() {
        return this._dateDeNaissance;
    }
    get telephone() {
        return this._telephone;
    }

}

export default User;
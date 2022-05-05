import { makeAutoObservable } from 'mobx';

class Partie {

    _id;
    _typePartie;
    _datePartie;
    _reponses;
    _user;

    constructor(id, typePartie, datePartie, reponses, user) {
        makeAutoObservable(this);
        this._id = id;
        this._typePartie = typePartie;
        this._datePartie = datePartie;
        this._reponses = reponses;
        this._user = user;
    }

    get id() {
        return this._id;
    }

    get typePartie() {
        return this._typePartie;
    }

    get datePartie() {
        return this._datePartie;
    }

    get reponses() {
        return this._reponses;
    }

    get user() {
        return this._user;
    }

    toStringResults() {
        return JSON.stringify(this._reponses);
    }

}

export default Partie;
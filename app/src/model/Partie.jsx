import { makeAutoObservable } from 'mobx';

class Partie {

    _id;
    _typePartie;
    _datePartie;
    _reponses;
    _user;
    _debriefing;
    _objectif;

    constructor(id, typePartie, datePartie, reponses, user, debriefing, objectif) {
        makeAutoObservable(this);
        this._id = id;
        this._typePartie = typePartie;
        this._datePartie = datePartie;
        this._reponses = reponses;
        this._user = user;
        this._debriefing = debriefing;
        this._objectif = objectif;
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

    get debriefing() {
        return this._debriefing;
    }
    
    get objectif() {
        return this._objectif;
    }

    set debriefing(value) {
        this._debriefing = value;
    }

    toStringResults() {
        return JSON.stringify(this._reponses);
    }

    toStringDebriefing() {
        return JSON.stringify(this._debriefing);
    }

}

export default Partie;
import { makeAutoObservable } from 'mobx';

class TypePartie {

    _id;
    _mode;
    _acro;
    _temps;

    constructor(id, mode, acro, temps) {
        makeAutoObservable(this);
        this._id = id;
        this._mode = mode;
        this._acro = acro;
        this._temps = temps;
    }

    get id() {
        return this._id;
    }

    get mode() {
        return this._mode;
    }

    get acro() {
        return this._acro;
    }

    get temps() {
        return this._temps;
    }

}

export default TypePartie;
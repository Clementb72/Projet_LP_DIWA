import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';
import TypePartie from './TypePartie.jsx';

class TypePartieManager {
    _typesPartie = [];
    _dataLoading = false;

    constructor() {
        makeAutoObservable(this, {
            _dataLoading: false
        });
    }

    get typesPartie() {
        this.loadTypesPartie();
        return this._typesPartie;
    }

    async loadTypesPartie() {

        if (this._dataLoading)
            return;
            
        const url = 'http://127.0.0.1:8080/api/typesPartie';
        this._dataLoading = true;

        try {

            const { data } = await axios.get(url);

            if (undefined != data) {

                runInAction(() => {
                    this._typesPartie = data.map(type => {
                        return new TypePartie(type.id, type.mode, type.acro, type.temps);
                    });
                    this._dataLoading = false;
                });
                
                return this._typesPartie;
                
            }

        } catch (err) {

            console.log(err);
            
        }

    }

    getTypePartieByAcro(acro) {
        return this._typesPartie.filter((type) => {
            if (type.acro === acro)
                return type;
        })[0];
    }

    getTypePartieById(id) {

        let typePartie = this._typesPartie.filter((type) => {
            if (type.id === id)
                return type;
        })[0];

        if (undefined === typePartie)
            return new TypePartie(0, null, null, "present");

        return typePartie;

    }

}

export default TypePartieManager;
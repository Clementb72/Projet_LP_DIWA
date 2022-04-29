import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import Partie from './Partie.jsx';

class PartieManager {
    _parties = [];
    _dataLoading = false;

    constructor() {
        makeAutoObservable(this, {
            _dataLoading: false
        });
    }

    get parties() {
        return this._user;
    }

    initPartie() {

        let reponses = [];

        for (let index = 0; index < 9; index++) {
            reponses[index] = {
                reponse: "",
                satisfaction: "",
                listTags: []
            };
        }

        return reponses;

    }

    buildPartie(typePartie, reponses, user) {

        return new Partie(null, typePartie, (new Date()).toISOString(), reponses, user)

    }

    sendPartie(partie) {

        let formData = new FormData();
        formData.append('type_partie', 'SC');
        formData.append('reponses', partie.toStringResults());
        formData.append('users', partie.user.id);

        axios.post('http://127.0.0.1:8080/api/partie', formData).then(function (response) {
            console.log(response.data)
        }).catch(function (error) {
            console.log(error.response.data)
        })

    }

    getPartieEnCours() {
        return this._parties.map((partie) => {
            if (partie.id === null) {
                return partie;
            }
        })[0];
    }

}

export default PartieManager;
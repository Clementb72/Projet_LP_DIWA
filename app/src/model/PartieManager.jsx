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
        return this._parties;
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

    buildPartie(typePartie, reponses, user, debriefing, objectif) {

        return new Partie(null, typePartie, (new Date()).toISOString(), reponses, user, debriefing, objectif)

    }

    savePartie(partie){
        if(partie instanceof Partie) this._parties.push(partie)
    }

    async sendPartie(partie) {

        let formData = new FormData();
        formData.append('type_partie', partie.typePartie.acro);
        formData.append('reponses', partie.toStringResults());
        formData.append('users', partie.user.id);
        formData.append('debriefing', partie.toStringDebriefing());
        formData.append('objectif', partie.objectif);

        await axios.post('http://127.0.0.1:8080/api/partie', formData).then(function (response) {
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
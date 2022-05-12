import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';
import User from './User.jsx';

class UserManager {
    _user = null;
    _dataLoading = false;

    constructor() {
        makeAutoObservable(this, {
            _dataLoading: false
        });
    }

    get user() {
        if (sessionStorage.getItem("user")) {
            let data = JSON.parse(sessionStorage.getItem("user"));
            this._user = new User(data.id, data.nom, data.prenom, data.email, data.roles, data.token);
            return this._user;
        }
        return this._user;
    }

    async connexion(email, password) {

        if (this._dataLoading)
            return;
            
        const url = '/api/login';
        this._dataLoading = true;

        try {

            const response = await axios.post(url, {
                username: email,
                password: password
            });

            const { status, data } = response;

            if (status === 200) {

                runInAction(() => {
                    this._user = new User(data.id, data.nom, data.prenom, data.email, data.roles, data.token);
                    sessionStorage.setItem("user", JSON.stringify(data));
                });
                
            }
            
            this._dataLoading = false;
            return response;

        } catch (err) {

            this._dataLoading = false;
            return err;
            
        }
        
    }

}

export default UserManager;
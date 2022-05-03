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
        return this._user;
    }

    async connexion(email, password) {

        if (this._dataLoading)
            return;
            
        const url = 'http://127.0.0.1:8080/api/login';
        this._dataLoading = true;

        try {

            const { data } = await axios.post(url, {
                username: email,
                password: password
            });

            if (undefined != data) {

                runInAction(() => {
                    this._user = new User(data.id, data.nom, data.prenom, data.email, data.roles, data.token);
                    this._dataLoading = false;
                });
                
                return this._user;
                
            }

        } catch (err) {

            console.log(err);
            
        }
        
    }

}

export default UserManager;
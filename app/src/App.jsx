import React from 'react';
import RootStore from './RootStore.jsx';
import STORE from './store.js';
import Home from './Scenes/Home.jsx';
import SelectGame from './Scenes/SelectGame.jsx';
import Form from './Scenes/Form.jsx';
import LoginForm from './Scenes/LoginForm.jsx';
import { Routes, Route } from 'react-router-dom';
import Debriefing from './Scenes/Debriefing.jsx';
import Registration from './Scenes/Registration.jsx';
import Profil from './Scenes/Profil.jsx';
import FormEnd from './Scenes/FormEnd.jsx';

import '../public/style/App.scss';
import '../public/style/style.scss';

function App() {
    return (
        <RootStore.Provider value={STORE}>
            <div className="App">
                <Routes>
                    <Route path='/'  element={<Home/>}/>
                    <Route path='/game' element={<SelectGame/>}/>
                    <Route path='/register' element={<Registration/>}/>
                    <Route path='/login' element={<LoginForm/>}/>
                    <Route path='/formulaire' element={<Form/>}/>
                    <Route path='/fin' element={<FormEnd/>}/>
                    <Route path='/debriefing' element={<Debriefing/>}/>
                    <Route path='/profil' element={<Profil/>}/>
                </Routes>
            </div>
        </RootStore.Provider>
    );
}

export default App;
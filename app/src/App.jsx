import React from 'react';
import Home from './Scenes/Home.jsx';
import SelectGame from './Scenes/SelectGame.jsx';
import Form from './Scenes/Form.jsx';
import LoginForm from './Scenes/LoginForm.jsx';
import { Routes, Route } from 'react-router-dom';

import '../public/style/App.scss';
import '../public/style/style.scss';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/'  element={<Home/>}/>
                <Route path='/game' element={<SelectGame/>}/>
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/formulaire' element={<Form/>}/>
            </Routes>
        </div>
    );
}

export default App;
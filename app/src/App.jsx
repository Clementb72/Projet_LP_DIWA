import React from 'react';
import Form from './Scenes/Form.jsx';
import LoginForm from './Scenes/LoginForm.jsx';
import { Routes, Route } from 'react-router-dom';

import '../public/style/App.scss';
import '../public/style/style.scss';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/'  element={<LoginForm/>}/>
                <Route path='/formulaire' element={<Form/>}/>
            </Routes>
        </div>
    );
}

export default App;
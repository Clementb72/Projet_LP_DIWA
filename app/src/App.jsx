import React from 'react';
import Form from './Scenes/Form.jsx';
import LoginForm from './Scenes/LoginForm.jsx';
import '../public/style/App.scss';
import '../public/style/style.scss';
import {Routes, Route} from 'react-router-dom'

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
import React from 'react';
import LoginForm from './Scenes/LoginForm.jsx';
import '../public/style/App.scss';
import '../public/style/style.scss';
// import SelectGame from './pages/SelectGame.jsx';
import Home from './pages/Home.jsx';



function App() {
    return (
        <div className="App">
            <Home/>
            {/* <SelectGame/> */}
        </div>
    );
}

export default App;
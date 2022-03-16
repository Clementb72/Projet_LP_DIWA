require('file-loader?name=[name].[ext]!../public/index.html');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import '../public/style/index.scss';
import { BrowserRouter } from 'react-router-dom'


const app = document.getElementById('app');

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , app);
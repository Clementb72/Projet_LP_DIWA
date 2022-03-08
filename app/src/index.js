require('file-loader?name=[name].[ext]!../public/index.html');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '../public/style/index.scss';

const app = document.getElementById('app');

ReactDOM.render(<App/>, app);
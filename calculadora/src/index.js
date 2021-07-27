import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

import Calculator from './main/Calculator';
import Button from './components/Button';

ReactDOM.render(
    <div>
        <h1>Calculadora</h1>
        <Calculator/>
    </div>,
    document.getElementById('root')
);
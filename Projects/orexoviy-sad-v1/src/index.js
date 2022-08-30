import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './index.scss';

import Chakra from './chakra';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Chakra />
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();

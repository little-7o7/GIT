import React, { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import Login from '../pages/Login/Login';
import Overview from '../pages/Overview/Overview';
import Wallets from '../pages/Wallets/Wallets';
import Transictions from '../pages/Transictions/Transictions';
import Exchange from '../pages/Exchange/Exchange';
import Market from '../pages/Market/Market';

import './App.scss';

function App() {
    const [navStatus, setNavStatus] = useState('login');

    return (
        <ChakraProvider>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Navigate path='/' to="/login" replace={true} />} />
                    <Route path="/login" element={<Login status={{ navStatus, setNavStatus }} />} />
                    <Route path="/overview" element={<Overview status={{ navStatus, setNavStatus }} />} />
                    <Route path="/wallets" element={<Wallets status={{ navStatus, setNavStatus }} />} />
                    <Route path="/transictions" element={<Transictions status={{ navStatus, setNavStatus }} />} />
                    <Route path="/exchange" element={<Exchange status={{ navStatus, setNavStatus }} />} />
                    <Route path="/market" element={<Market status={{ navStatus, setNavStatus }} />} />
                </Routes>
            </div>
        </ChakraProvider>
    );
}

export default App;

import React from 'react';
import { Routes, Route } from "react-router-dom";

import './Admin.scss';
import LoginPanel from './LoginPanel/LoginPanel';

const Admin = () => {
    return (
        <div className='Admin'>
            <Routes>
                <Route path="/login" element={<LoginPanel />} />
                <Route path="/logined" element={'logined'} />
            </Routes>
        </div>
    );
}

export default Admin;

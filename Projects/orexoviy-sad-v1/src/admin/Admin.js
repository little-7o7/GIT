import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { useUserAuth } from "../UserAuthContext";

import './Admin.scss';
import LoginedPanel from './LoginedPanel/LoginedPanel';
import LoginPanel from './LoginPanel/LoginPanel';


const Admin = () => {
    return (
        <div className='Admin'>
            <Routes>
                <Route path="/login" element={<LoginPanel />} />
                <Route path="/logined/*" element={<LoginedPanel />} />
            </Routes>
        </div >
    );
}

export default Admin;

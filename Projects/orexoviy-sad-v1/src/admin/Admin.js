import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { UserAuthContextProvider } from "./UserAuthContext";

import './Admin.scss';
import LoginedPanel from './LoginedPanel/LoginedPanel';
import LoginPanel from './LoginPanel/LoginPanel';


const Admin = () => {

    return (
        <div className='Admin'>
            <UserAuthContextProvider>
                <Routes>
                    <Route path="/" element={<Navigate to="login" replace />} />
                    <Route path="/login" element={<LoginPanel />} />
                    <Route path="/logined/*" element={<LoginedPanel />} />
                </Routes>
            </UserAuthContextProvider>
        </div >
    );
}

export default Admin;

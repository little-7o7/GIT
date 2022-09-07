import React, { useState, useEffect, lazy } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { UserAuthContextProvider } from "./UserAuthContext";

import './Admin.scss';

const LoginedPanel = lazy(() => import('./LoginedPanel/LoginedPanel'));
const LoginPanel = lazy(() => import('./LoginPanel/LoginPanel'));

const Admin = () => {

    return (
        <div className='Admin'>
            <UserAuthContextProvider>
                <Routes>
                    <Route path="" exact element={<Navigate to="login" replace />} />
                    <Route path="login" exact element={<LoginPanel />} />
                    <Route path="logined/*" exact element={<LoginedPanel />} />
                    <Route path="*" element={<Navigate to="login" replace />} />
                </Routes>
            </UserAuthContextProvider>
        </div >
    );
}

export default Admin;

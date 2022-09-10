import React from 'react';
import { StrictMode, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Client = () => {
    return (
        <>
            <StrictMode>
                <Routes>
                    <Route path="/" exact element={<Navigate to="/home" replace />} />
                    <Route path="home" exact element={'home'} />
                    <Route path="page" exact element={'page'} />
                    <Route path="*" element={'404'} />
                </Routes>
            </StrictMode>
        </>
    );
}



export default Client;

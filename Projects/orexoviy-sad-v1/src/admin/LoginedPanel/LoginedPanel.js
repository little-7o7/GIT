import React, { useState, useEffect } from 'react';
import { useUserAuth } from "../../UserAuthContext";
import LoginedPanelNavbar from '../LoginedPanelNavbar/LoginedPanelNavbar';

import './LoginedPanel.scss';

const LoginedPanel = () => {
    const { user, logOut } = useUserAuth();
    const { email } = user;
    console.log(email);

    return (
        <LoginedPanelNavbar user={email} />
    );
}

export default LoginedPanel;

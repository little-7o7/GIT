import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from "../../UserAuthContext";

import './LoginedPanelNavbar.scss';
import Logo from './../logo.jpg';
import { HiOutlineLogout } from 'react-icons/hi';
import { RiAdminLine } from 'react-icons/ri';

const LoginedPanelNavbar = (props) => {
    const { logOut } = useUserAuth();
    const admin = props.admin || {username: ''}
    const navigator = useNavigate();

    return (
        <div className='LoginedPanelNavbar'>
            <div className="left">
                <div className="content">
                    <div className="top">
                        <div className="img">
                            <img src={Logo} alt="" />
                        </div>
                        <Link to='/admin/logined/'>
                            <div className="button">
                                <div className='radius'></div>
                                <span className="text">Buttons</span>
                            </div>
                        </Link>
                    </div>
                    <div className="bottom">
                        <div className="user button" tabIndex='0'>
                            <div className='radius'>
                                <RiAdminLine color='white' size='20px' />
                            </div>
                            <span className="text">{admin.username}</span>
                        </div>
                        <div className="logOut button" tabIndex='0'>
                            <div className='radius'>
                                <HiOutlineLogout color='white' size='20px' />
                            </div>
                            <span className="text">Выход</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default LoginedPanelNavbar;

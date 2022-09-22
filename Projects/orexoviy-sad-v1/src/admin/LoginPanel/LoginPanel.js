import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "./../UserAuthContext";

import { Helmet } from "react-helmet";
import favicon from '../../assets/img/favicon.png'

import { Input, InputGroup, InputLeftAddon, InputRightAddon, Button } from '@chakra-ui/react'
import { BsFillPersonFill } from "react-icons/bs";
import { RiShieldKeyholeFill } from "react-icons/ri";

import './LoginPanel.scss';

import Logo from './../logo.jpg'

const LoginPanel = (props) => {
    const [error, setError] = useState(false);
    const { logIn, logOut } = useUserAuth();
    logOut();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            await logIn(e.target[0].value, e.target[1].value);
            navigate(`/admin/logined`);
        } catch (err) {
            setError(true);
        }
    };

    const [passHide, setPassHide] = useState(true);

    const UserInp = useRef();
    const PassInp = useRef();

    let passIcon = ''
    if (passHide === true) {
        passIcon = '🙈'
    } else {
        passIcon = '🙉'
    }

    const focusInput = (inp) => {
        inp.current.focus();
    };

    return (
        <div className='LoginPanel'>
            <Helmet>
                <title>Admin Login</title>
                <link rel="icon" href={favicon} />
            </Helmet>
            <div className='login'>
                <img src={Logo} alt="Logo" />
                <form onSubmit={handleSubmit} className='loginForm'>
                    <InputGroup>
                        <InputLeftAddon p='0 13.5px' onClick={() => focusInput(UserInp)} w='50px' bg='' children={<BsFillPersonFill size='20px' color='rgba(44, 159, 61, 1)' />} borderColor='rgba(44, 159, 61, 1)' borderWidth='2px' />
                        <Input defaultValue='munisxonovmaxmudxon@gmail.com' type='email' ref={UserInp} focusBorderColor='none' _hover='' placeholder='Username' w='100%' borderColor='rgba(44, 159, 61, 1)' borderWidth='2px' />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftAddon p='0 13.5px' onClick={() => focusInput(PassInp)} w='50px' bg='' children={<RiShieldKeyholeFill size='20px' color='rgba(44, 159, 61, 1)' />} borderColor='rgba(44, 159, 61, 1)' borderWidth='2px' />
                        <Input defaultValue='little_7o7' type={passHide === true ? 'password' : 'text'} ref={PassInp} focusBorderColor='none' _hover='' borderRight='none' paddingRight='0' placeholder='Password' w='100%' borderColor='rgba(44, 159, 61, 1)' borderWidth='2px' />
                        <InputRightAddon w='50px' bg='' fontSize='18px' children={passIcon} userSelect='none' borderLeft='none' onClick={() => setPassHide(!passHide)} borderColor='rgba(44, 159, 61, 1)' borderWidth='2px' />
                    </InputGroup>
                    <span className={`validation ${error ? 'show' : ''}`}>Неверное имя пользователя или пароль.</span>
                    <Button type='submit' className='singin'>Вход</Button>
                </form>
            </div>
        </div>
    );
}

export default LoginPanel;

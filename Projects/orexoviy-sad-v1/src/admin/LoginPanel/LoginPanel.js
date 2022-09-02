import React, { useState, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../UserAuthContext";

import { Input, InputGroup, InputLeftAddon, InputRightAddon, Button } from '@chakra-ui/react'
import { BsFillPersonFill } from "react-icons/bs";
import { RiShieldKeyholeFill } from "react-icons/ri";

import './LoginPanel.scss';

import Logo from './../logo.jpg'

const LoginPanel = (props) => {
    const [email, setEmail] = useState("munisxonovmaxmudxon@gmail.com");
    const [password, setPassword] = useState("little_7o7");
    const { logIn } = useUserAuth();
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            await logIn(email, password);
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
            <div className='login'>
                <img src={Logo} alt="Logo" />
                <form onSubmit={handleSubmit} className='loginForm'>
                    <InputGroup>
                        <InputLeftAddon p='0 13.5px' onClick={() => focusInput(UserInp)} w='50px' bg='' children={<BsFillPersonFill size='20px' color='rgba(44, 159, 61, 1)' />} borderColor='rgba(44, 159, 61, 1)' borderWidth='2px' />
                        <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} ref={UserInp} focusBorderColor='none' _hover='' placeholder='Username' w='100%' borderColor='rgba(44, 159, 61, 1)' borderWidth='2px' />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftAddon p='0 13.5px' onClick={() => focusInput(PassInp)} w='50px' bg='' children={<RiShieldKeyholeFill size='20px' color='rgba(44, 159, 61, 1)' />} borderColor='rgba(44, 159, 61, 1)' borderWidth='2px' />
                        <Input type={passHide === true ? 'password' : 'text'} value={password} onChange={(e) => setPassword(e.target.value)} ref={PassInp} focusBorderColor='none' _hover='' borderRight='none' paddingRight='0' placeholder='Password' w='100%' borderColor='rgba(44, 159, 61, 1)' borderWidth='2px' />
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

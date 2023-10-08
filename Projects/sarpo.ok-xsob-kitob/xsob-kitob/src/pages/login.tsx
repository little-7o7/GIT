import '../styles/login.scss'
import Head from 'next/head'

import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import axios from "axios";

import { useAuth } from "../contexts/Auth";

import { Button, TextField } from '@mui/material/';

const Login = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const { setAuthTokens, handleLogout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        handleLogout()
    }, [])

    const postLogin = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:5500/admins/${event.target[0].value}`)
            .then((result) => {
                console.log("result", result);
                if (result.status === 200) {
                    if (result.data.password === event.target[1].value) {
                        setAuthTokens(result.data);
                        setLoggedIn(true);
                        console.log(result.data);
                    }
                } else {
                    setIsError(true);
                }
            })
            .catch((e) => {
                setIsError(true);
                console.log(e);
            });
    }

    if (isLoggedIn) {
        router.push('/')
    }

    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="Creater by little_7o7" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="login">
                <div className="center">
                    <div className="left">
                        <form onSubmit={postLogin} className='loginForm'>
                            <h1>Login for Admins</h1>
                            <TextField name='username' label="Username" type='text' variant="filled" />
                            <TextField name='password' label="Password" type='password' variant="filled" />
                            {isError ? <span>The username or password provider were incorrect.</span> : ''}
                            <Button variant="contained" type='submit' color="inherit">Outlined</Button>
                        </form>
                    </div>
                    <div className="right">
                        {/* <h1 className="img">SARPO</h1> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login
import styles from './LoginForm.module.scss'
import LoginSinginInput from '../LoginSinginInput/LoginSinginInput';
import Link from 'next/link';
import { useState } from 'react';

const LoginForm = () => {
    const [errorStatus, setErrorStatus] = useState(false)
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setErrorStatus(false)
        if (1+1) {
            console.log(e);
        } else {
            setErrorStatus(true)
        }
    }

    return (
        <div className={styles.container}>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <LoginSinginInput defaultValue='+998330737477' type='text' labelText='Phone' />
                <LoginSinginInput defaultValue='lovely_feride' type='password' labelText='Password' />
                <span className={styles.error} style={errorStatus ? { opacity: 1 } : { opacity: 0 }}>Check Phone number and Password</span>
                <button>Sign in</button>
            </form>
            <span className={styles.registerLink}>
                <Link href='/register'>Create account</Link>
            </span>
        </div>
    )
}

export default LoginForm
import styles from './LoginForm.module.scss'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import LoginSinginInput from '../LoginSinginInput/LoginSinginInput';

const LoginForm = () => {
    const [errorStatus, setErrorStatus] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/')
        } catch (err) {
            setErrorStatus(true);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <LoginSinginInput defaultValue='munisxonovmaxmudxon@gmail.com' type='text' labelText='Email' />
                <LoginSinginInput defaultValue='Eshonchaoo7' type='password' labelText='Password' />
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
import styles from './SinginForm.module.scss'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useUserAuth } from "../../../src/context/UserAuthContext";
import LoginSinginInput from '../LoginSinginInput/LoginSinginInput';
import { getAuth, updateProfile } from "firebase/auth";

const SinginForm = () => {
    const { user, signUp, updateProfileData } = useUserAuth();
    let router = useRouter();
    const [errorStatus, setErrorStatus] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (e.target[2].value === e.target[3].value) {
            setErrorStatus(false)

            try {
                await signUp(e.target[1].value, e.target[2].value);
                await updateProfileData(e.target[0].value)
                await router.push('/')
            } catch (err) {
                setErrorStatus(true)
            }
        }
    };

    return (
        <div className={styles.container}>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}>
                <LoginSinginInput defaultValue='little_7o7' type='text' labelText='Username' />
                <LoginSinginInput defaultValue='munisxonovmaxmudxon@gmail.com' type='text' labelText='Email' />
                <LoginSinginInput defaultValue='lovely_feride' type='password' labelText='Password' />
                <LoginSinginInput defaultValue='lovely_feride' type='password' labelText='Repeat Password' />
                <span className={styles.error} style={errorStatus ? { opacity: 1 } : { opacity: 0 }}>Check Phone number and Password</span>
                <button>Sign up</button>
            </form>
            <span className={styles.registerLink}>
                <Link href='/login'>Sing in</Link>
            </span>
        </div>
    )
}

export default SinginForm
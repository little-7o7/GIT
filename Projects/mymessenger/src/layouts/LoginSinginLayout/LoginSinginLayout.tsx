import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from './LoginSinginLayout.module.scss'

interface ILoginSinginLayoutProps {
    children: any
}

const LoginSinginLayout = (props: ILoginSinginLayoutProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                {props.children}
            </div>
        </div>
    )
}

export default LoginSinginLayout
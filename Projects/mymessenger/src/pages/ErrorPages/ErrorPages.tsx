import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from './ErrorPages.module.scss'

interface IErrorPageProps {
    error: number;
    title: string; 
}

const ErrorPage = (props: IErrorPageProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <h1>{props.error}</h1>
                <span>{props.title}</span>
                <Link href={'/'}>Go to home</Link>
            </div>
        </div>
    )
}

export default ErrorPage
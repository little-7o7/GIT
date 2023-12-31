import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { decrement, increment } from '../slices/counterSlice'

const Home: NextPage = () => {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>The value of count is {count}</h1>

            <div style={{display: 'flex', gap: '10px'}}>
                <button onClick={() => dispatch(increment())}>inc</button>
                <button onClick={() => dispatch(decrement())}>dec</button>
            </div>
        </div>
    )
}

export default Home

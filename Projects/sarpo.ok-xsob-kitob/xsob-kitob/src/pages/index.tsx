import '../styles/index.scss'
import Head from 'next/head'

import { useAppDispatch, useAppSelector } from '../app/hooks';

import NavigationLayout from '@/layouts/NavigationLayout/NavigationLayout';

const Home = () => {
    const state = useAppSelector(state => state);
    const dispatch = useAppDispatch();

    return (
        <>
            <Head>
                <title>SARPO</title>
                <meta name="description" content="Creater by little_7o7" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavigationLayout navigation='statistic'>
                asdfasdfasdf
            </NavigationLayout>
        </>
    )
}

export default Home;
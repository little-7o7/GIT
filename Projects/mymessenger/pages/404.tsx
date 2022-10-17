import type { NextPage } from 'next'
import Head from 'next/head'
import ErrorPage from '../src/pages/ErrorPages/ErrorPages'

const Page404: NextPage = () => {
    return (
        <div>
            <Head>
                <title>404</title>
                <meta name="description" content="Creater by little_7o7" />
            </Head>
            <ErrorPage error={404} title='Page not found.' />
        </div>
    )
}

export default Page404
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react';


const Index: NextPage = () => {
    const router = useRouter();

    // useEffect(() => {
    //     if (1 + 1) {
    //         router.push('/login')
    //     }
    // }, [])

    return (
        <div>
            <Head>
                <title>myMessenger</title>
                <meta name="description" content="Creater by little_7o7" />
            </Head>
        </div>
    )
}

export default Index
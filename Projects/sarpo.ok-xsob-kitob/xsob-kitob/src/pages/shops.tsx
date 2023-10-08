import Head from 'next/head'

import NavigationLayout from '@/layouts/NavigationLayout/NavigationLayout';

const Shops = () => {

    return (
        <>
            <Head>
                <title>Shops</title>
                <meta name="description" content="Creater by little_7o7" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavigationLayout navigation='shops'>

            </NavigationLayout>
        </>
    )
}

export default Shops;
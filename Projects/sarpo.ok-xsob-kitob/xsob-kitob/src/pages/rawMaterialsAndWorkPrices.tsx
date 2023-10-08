import Head from 'next/head'

import NavigationLayout from '@/layouts/NavigationLayout/NavigationLayout';

const rawMaterialsAndWorkPrices = () => {

    return (
        <>
            <Head>
                <title>Prices</title>
                <meta name="description" content="Creater by little_7o7" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavigationLayout navigation='rawMaterialsAndWorkPrices'>

            </NavigationLayout>
        </>
    )
}

export default rawMaterialsAndWorkPrices;
import '../src/styles/globals.scss'
import type { AppProps } from 'next/app'
import { store } from '../app/store'
import { Provider } from 'react-redux'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        localStorage.setItem('chakra-ui-color-mode', 'dark');
    }, [])

    return (
        <ChakraProvider>
            <ColorModeScript initialColorMode={'dark'} />
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </ChakraProvider>
    )
}

export default MyApp

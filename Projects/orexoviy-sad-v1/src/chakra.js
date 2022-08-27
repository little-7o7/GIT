import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import App from './app/App';

function Chakra() {
    return (
        <ChakraProvider>
            <App />
        </ChakraProvider>
    )
}

export default Chakra;
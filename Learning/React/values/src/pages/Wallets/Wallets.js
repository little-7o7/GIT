import React, { useEffect } from 'react';
import { Box, Flex, Text, Grid, GridItem } from '@chakra-ui/react'

import '././Wallets.scss';
import NavbarHeader from '../../components/NavbarHeader/NavbarHeader';

const Wallets = ({ status }) => {
    useEffect(() => {
        status.setNavStatus('wallets')
    }, [])

    return (
        <Box className='Wallets'>
            <NavbarHeader status={status}>
                <Flex w='100%' align='flex-end' justify='space-between' m='20px 0'>
                    <Text fontSize='21px' fontWeight='600' color='white'>Wallets</Text>
                </Flex>
                <Flex h='200px' w='100%' inlineSize='max-content' overflow='scroll'>
                    <Flex w='5000px' gap='20px'>
                        <Flex h='100%' w='350px' borderRadius='10px' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                        <Flex h='100%' w='350px' borderRadius='10px' bg='linear-gradient(237.07deg, rgba(96, 67, 146, 0.5) -8.06%, rgba(15, 11, 56, 0.5) 96.63%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                        <Flex h='100%' w='350px' borderRadius='10px' bg='linear-gradient(237.07deg, #6162D6 -8.06%, #0F0B38 96.63%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                        <Flex h='100%' w='350px' borderRadius='10px' bg='linear-gradient(237.07deg, #72EB38 -8.06%, #0F0B38 96.63%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                        <Flex h='100%' w='350px' borderRadius='10px' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                        <Flex h='100%' w='350px' borderRadius='10px' bg='linear-gradient(237.07deg, rgba(96, 67, 146, 0.5) -8.06%, rgba(15, 11, 56, 0.5) 96.63%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                        <Flex h='100%' w='350px' borderRadius='10px' bg='linear-gradient(237.07deg, #6162D6 -8.06%, #0F0B38 96.63%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                        <Flex h='100%' w='350px' borderRadius='10px' bg='linear-gradient(237.07deg, #72EB38 -8.06%, #0F0B38 96.63%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                        <Flex h='100%' w='350px' borderRadius='10px' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                        <Flex h='100%' w='350px' borderRadius='10px' bg='linear-gradient(237.07deg, rgba(96, 67, 146, 0.5) -8.06%, rgba(15, 11, 56, 0.5) 96.63%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                        <Flex h='100%' w='350px' borderRadius='10px' bg='linear-gradient(237.07deg, #6162D6 -8.06%, #0F0B38 96.63%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                        <Flex h='100%' w='350px' borderRadius='10px' bg='linear-gradient(237.07deg, #72EB38 -8.06%, #0F0B38 96.63%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                    </Flex>
                </Flex>
                <Grid w='100%' templateRows='repeat(1, 520px)' templateColumns='repeat(2, 1fr)' gridGap='30px' mt='30px'>
                    <GridItem>
                        <Flex w='100%' h='100%' borderRadius='10px' bg='linear-gradient(176.95deg, rgba(27, 18, 78, 0.2) -32.8%, #0F0B38 88.83%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                    </GridItem>
                    <GridItem>
                        <Flex w='100%' h='100%' borderRadius='10px' bg='linear-gradient(176.95deg, rgba(27, 18, 78, 0.2) -32.8%, #0F0B38 88.83%)'></Flex>
                    </GridItem>
                </Grid>
            </NavbarHeader>
        </Box>
    );
}

export default Wallets;

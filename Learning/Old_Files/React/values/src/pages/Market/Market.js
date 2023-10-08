import React, { useEffect } from 'react';
import { Box, Flex, Text, Grid, GridItem } from '@chakra-ui/react'

import '././Market.scss';
import NavbarHeader from '../../components/NavbarHeader/NavbarHeader';


const Market = ({ status }) => {
    useEffect(() => {
        status.setNavStatus('market')
    }, [])

    return (
        <Box className='Market'>
            <NavbarHeader status={status}>
                <Flex direction='column' w='100%' h='860px'>
                    <Flex w='100%' align='flex-end' justify='space-between' m='20px 0'>
                        <Text fontSize='21px' fontWeight='600' color='white'>Market</Text>
                    </Flex>
                    <Grid h='87%' templateColumns='repeat(3, 1fr)' gridGap='25px'>
                        <GridItem>
                            <Flex h='100%' borderRadius='10px' width='100%' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) -49.17%, #0F0B38 90.11%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                        </GridItem>
                        <GridItem>
                            <Flex h='100%' borderRadius='10px' width='100%' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) -49.17%, #0F0B38 90.11%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                        </GridItem>
                        <GridItem>
                            <Flex h='100%' borderRadius='10px' width='100%' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) -49.17%, #0F0B38 90.11%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                        </GridItem>
                        <GridItem>
                            <Flex h='100%' borderRadius='10px' width='100%' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) -49.17%, #0F0B38 90.11%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                        </GridItem>
                        <GridItem>
                            <Flex h='100%' borderRadius='10px' width='100%' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) -49.17%, #0F0B38 90.11%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                        </GridItem>
                        <GridItem>
                            <Flex h='100%' borderRadius='10px' width='100%' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) -49.17%, #0F0B38 90.11%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                        </GridItem>
                        <GridItem>
                            <Flex h='100%' borderRadius='10px' width='100%' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) -49.17%, #0F0B38 90.11%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                        </GridItem>
                        <GridItem>
                            <Flex h='100%' borderRadius='10px' width='100%' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) -49.17%, #0F0B38 90.11%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                        </GridItem>
                        <GridItem>
                            <Flex h='100%' borderRadius='10px' width='100%' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) -49.17%, #0F0B38 90.11%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                        </GridItem>
                    </Grid>
                </Flex>
            </NavbarHeader>
        </Box>
    );
}

export default Market;

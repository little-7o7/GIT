import React, { useEffect } from 'react';
import { Box, Flex, Grid, GridItem, Text, Button } from '@chakra-ui/react'

import '././Exchange.scss';
import NavbarHeader from '../../components/NavbarHeader/NavbarHeader';

const Exchange = ({ status }) => {
    useEffect(() => {
        status.setNavStatus('exchange')
    }, [])

    return (
        <Box className='Exchange'>
            <NavbarHeader status={status}>
                <Grid className='Exchanger' w='100%' h='100' templateRows='repeat(5, 1fr)' templateColumns='repeat(2, 1fr)' columnGap='30px'>
                    <GridItem colSpan={2} pt='20px'>
                        <Text fontSize='21px' fontWeight='600' color='white'>Exchange</Text>
                    </GridItem>
                    <GridItem colSpan={1} pt='20px'>
                        <Text fontSize='15px' fontWeight='600' color='#616A8B'>From</Text>
                    </GridItem>
                    <GridItem colSpan={1} pt='20px'>
                        <Text fontSize='16px' fontWeight='600' color='#616A8B'>To</Text>
                    </GridItem>
                    <GridItem colSpan={1} pt='10px'>
                        <Flex w='100%' h='330px' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)' borderRadius='10px'></Flex>
                    </GridItem>
                    <GridItem colSpan={1} pt='10px'>
                        <Flex w='100%' h='330px' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)' borderRadius='10px'></Flex>
                    </GridItem>
                    <GridItem colSpan={2} pt='30px'>
                        <Flex w='100%' h='180px' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) -153.98%, #0F0B38 140.59%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)'></Flex>
                    </GridItem>
                    <GridItem colSpan={2} pt='30px'>
                        <Flex w='100%' justify='center' >
                            <Button color='white' fontSize='20px' fontWeight='600' p='12px 20px'
                                bg='linear-gradient(88.43deg, #1288E8 11.5%, #0097E8 76.7%)'
                                boxShadow='0px 4px 12px rgba(0, 0, 0, 0.15)' borderRadius='10px'
                            >Exchange</Button>
                        </Flex>
                    </GridItem>
                </Grid>
            </NavbarHeader>
        </Box>
    );
}

export default Exchange;
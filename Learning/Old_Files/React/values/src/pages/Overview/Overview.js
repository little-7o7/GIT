import React, { useEffect } from 'react';
import { Box, Flex, Grid, GridItem, Text, Button } from '@chakra-ui/react'

import '././Overview.scss';
import NavbarHeader from '../../components/NavbarHeader/NavbarHeader';

const Overview = ({ status }) => {
    useEffect(() => {
        status.setNavStatus('overview')
    }, [])

    return (
        <Box>
            <NavbarHeader status={status}>
                <Grid className='Overviev' w='100%' h='100px' templateColumns='repeat(2, 22.5%) repeat(4, 12.5%)' templateRows='59px 180% 180% 340%' gridGap='16px'>
                    <GridItem colSpan={6} pt='20px'>
                        <Flex align='center' justify='space-between'>
                            <Flex align='center' gap='50px'>
                                <Text fontSize='21px' fontWeight='600' color='white'>Overview</Text>
                                <Text fontSize='16px' fontWeight='600' color='#54669C'>25 October, Sunday</Text>
                            </Flex>
                            <Button h='38px' w='137px' _hover='' borderRadius='25px' color='white'
                                bg='linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)'
                                boxShadow='linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)'
                            >Add widget</Button>
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={2}>
                        <Flex className='boxShadow' w='100%' h='100%' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%)'></Flex>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={2}>
                        <Flex className='boxShadow' w='100%' h='100%' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%)'></Flex>
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={1}>
                        <Flex className='boxShadow' w='100%' h='100%' bg='linear-gradient(237.07deg, #604392 -8.06%, #0F0B38 96.63%)'></Flex>
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={1}>
                        <Flex className='boxShadow' w='100%' h='100%' bg='linear-gradient(237.07deg, #D66168 -8.06%, #0F0B38 96.63%)'></Flex>
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={1}>
                        <Flex className='boxShadow' w='100%' h='100%' bg='linear-gradient(237.07deg, #6162D6 -8.06%, #0F0B38 96.63%)'></Flex>
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={1}>
                        <Flex className='boxShadow' w='100%' h='100%' bg='linear-gradient(237.07deg, #EB8338 -8.06%, #0F0B38 96.63%)'></Flex>
                    </GridItem>
                    <GridItem colSpan={3} rowSpan={2}>
                        <Flex className='boxShadow' w='100%' h='100%' bg='linear-gradient(176.95deg, rgba(27, 18, 78, 0.2) -32.8%, #0F0B38 88.83%)'></Flex>
                    </GridItem>
                    <GridItem colSpan={3} rowSpan={2}>
                        <Flex className='boxShadow' w='100%' h='100%' bg='linear-gradient(185.19deg, rgba(27, 18, 78, 0.2) 3.73%, #0F0B38 95.83%)'></Flex>
                    </GridItem>
                </Grid>
            </NavbarHeader>
        </Box>
    );
}

export default Overview;

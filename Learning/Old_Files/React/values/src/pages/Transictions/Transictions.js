import React, { useState, useEffect } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react'

import '././Transictions.scss';
import NavbarHeader from '../../components/NavbarHeader/NavbarHeader';

import { BsCurrencyBitcoin } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

const Transictions = ({ status }) => {
    const [viewState, setViewState] = useState('all')

    useEffect(() => {
        status.setNavStatus('transictions')
    }, [])

    return (
        <Box className='Transictions'>  
            <NavbarHeader status={status}>
                <Flex w='100%' direction='column'>
                    <Flex w='100%' align='flex-end' justify='space-between' mt='20px'>
                        <Text fontSize='21px' fontWeight='600' color='white'>Transictions</Text>
                        <Button h='38px' w='137px' _hover='' borderRadius='25px' color='white'
                            bg='linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)'
                            boxShadow='linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)'
                        >Export History</Button>
                    </Flex>
                    <Flex w='100%' align='flex-end' justify='space-between' mt='28px' pb='10px'>
                        <Text color='#616A8B' fontSize='19px' fontWeight='600'>Total 1,234</Text>
                        <Flex align='center' gap='10px'>
                            <Button className={`viewStateBtn ${viewState === 'all' ? 'active' : ''}`} position='relative' onClick={() => setViewState('all')} h='30px' p='0' bg='none' _hover='' borderRadius='5px' padding='0 10px' transition='.2s ease-in-out'>
                                <Flex w='100%' direction='column' align='center'>
                                    <Text as='span' fontSize='14px' color='#616A8B' transition='.2s ease-in-out'>All</Text>
                                    <Box className='line' position='absolute' top='28px' h='2px' w='100%' bg='#1288E8' borderRadius='1px' opacity='0' transition='.2s ease-in-out' />
                                </Flex>
                            </Button>
                            <Button className={`viewStateBtn ${viewState === 'send' ? 'active' : ''}`} position='relative' onClick={() => setViewState('send')} h='30px' p='0' bg='none' _hover='' borderRadius='5px' padding='0 10px' transition='.2s ease-in-out'>
                                <Flex w='100%' direction='column' align='center'>
                                    <Text as='span' fontSize='14px' color='#616A8B' transition='.2s ease-in-out'>Send</Text>
                                    <Box className='line' position='absolute' top='28px' h='2px' w='100%' bg='#1288E8' borderRadius='1px' opacity='0' transition='.2s ease-in-out' />
                                </Flex>
                            </Button>
                            <Button className={`viewStateBtn ${viewState === 'recent' ? 'active' : ''}`} position='relative' onClick={() => setViewState('recent')} h='30px' p='0' bg='none' _hover='' borderRadius='5px' padding='0 10px' transition='.2s ease-in-out'>
                                <Flex w='100%' direction='column' align='center'>
                                    <Text as='span' fontSize='14px' color='#616A8B' transition='.2s ease-in-out'>Recent</Text>
                                    <Box className='line' position='absolute' top='28px' h='2px' w='100%' bg='#1288E8' borderRadius='1px' opacity='0' transition='.2s ease-in-out' />
                                </Flex>
                            </Button>
                        </Flex>
                    </Flex>
                    <Flex className='transicitions' direction='column' w='100%' h='700px' overflowY='scroll' p='10px 0 20px 0' gap='20px'>
                        <Flex className='transicition waiting' w='100%' h='67px' align='center' justify='space-between' color='white' p='0 20px 0 30px' bg='rgba(43, 38, 126, .3)' boxShadow='0px 4px 8px rgba(0, 0, 0, 0.05)' borderRadius='8px'>
                            <Flex align='center' gap='37px'>
                                <Text fontSize='17px' fontWeight='600'>AM 01:16</Text>
                                <Text fontSize='17px'>24 dec 2018</Text>
                                <Flex align='center' justify='center' h='37px' w='37px' border='3px solid #1190F2' borderRadius='100%'>
                                    <BsCurrencyBitcoin size='21px' m='1.5px 0 0 2px' />
                                </Flex>
                            </Flex>
                            <Flex align='center' gap='35px' mr='450px'>
                                <HiArrowNarrowRight className='arrow' size='25px' color='#00E8AC' filter='drop-shadow(0px 4px 5px rgba(0, 232, 172, 0.5))' />
                                <Text fontSize='16px'>74EKRJMXkhKDR5dj34578fgirwE22sfg</Text>
                            </Flex>
                            <Flex align='center' gap='35px'>
                                <Text fontSize='16px' fontWeight='700'>0.0085 BTC</Text>
                                <Flex className='status' align='center' justify='center' h='45px' w='110px' borderRadius='5px' fontSize='17px' fontWeight='700'>Waiting</Flex>
                            </Flex>
                        </Flex>
                        <Flex className='transicition completed' w='100%' h='67px' align='center' justify='space-between' color='white' p='0 20px 0 30px' bg='rgba(43, 38, 126, .3)' boxShadow='0px 4px 8px rgba(0, 0, 0, 0.05)' borderRadius='8px'>
                            <Flex align='center' gap='37px'>
                                <Text fontSize='17px' fontWeight='600'>AM 01:16</Text>
                                <Text fontSize='17px'>24 dec 2018</Text>
                                <Flex align='center' justify='center' h='37px' w='37px' border='3px solid #1190F2' borderRadius='100%'>
                                    <FaEthereum size='21px' m='1.5px 0 0 2px' />
                                </Flex>
                            </Flex>
                            <Flex align='center' gap='35px' mr='450px'>
                                <HiArrowNarrowRight className='arrow' size='25px' color='#00E8AC' filter='drop-shadow(0px 4px 5px rgba(0, 232, 172, 0.5))' />
                                <Text fontSize='16px'>74EKRJMXkhKDR5dj34578fgirwE22sfg</Text>
                            </Flex>
                            <Flex align='center' gap='35px'>
                                <Text fontSize='16px' fontWeight='700'>0.0085 ETH</Text>
                                <Flex className='status' align='center' justify='center' h='45px' w='110px' borderRadius='5px' fontSize='17px' fontWeight='700'>Completed</Flex>
                            </Flex>
                        </Flex>
                        <Flex className='transicition error' w='100%' h='67px' align='center' justify='space-between' color='white' p='0 20px 0 30px' bg='rgba(43, 38, 126, .3)' boxShadow='0px 4px 8px rgba(0, 0, 0, 0.05)' borderRadius='8px'>
                            <Flex align='center' gap='37px'>
                                <Text fontSize='17px' fontWeight='600'>AM 01:16</Text>
                                <Text fontSize='17px'>24 dec 2018</Text>
                                <Flex align='center' justify='center' h='37px' w='37px' border='3px solid #1190F2' borderRadius='100%'>
                                    <BsCurrencyBitcoin size='21px' m='1.5px 0 0 2px' />
                                </Flex>
                            </Flex>
                            <Flex align='center' gap='35px' mr='450px'>
                                <HiArrowNarrowRight className='arrow' size='25px' color='#00E8AC' filter='drop-shadow(0px 4px 5px rgba(0, 232, 172, 0.5))' />
                                <Text fontSize='16px'>74EKRJMXkhKDR5dj34578fgirwE22sfg</Text>
                            </Flex>
                            <Flex align='center' gap='35px'>
                                <Text fontSize='16px' fontWeight='700'>0.0085 BTC</Text>
                                <Flex className='status' align='center' justify='center' h='45px' w='110px' borderRadius='5px' fontSize='17px' fontWeight='700'>Waiting</Flex>
                            </Flex>
                        </Flex>
                        <Flex className='transicition error' w='100%' h='67px' align='center' justify='space-between' color='white' p='0 20px 0 30px' bg='rgba(43, 38, 126, .3)' boxShadow='0px 4px 8px rgba(0, 0, 0, 0.05)' borderRadius='8px'>
                            <Flex align='center' gap='37px'>
                                <Text fontSize='17px' fontWeight='600'>AM 01:16</Text>
                                <Text fontSize='17px'>24 dec 2018</Text>
                                <Flex align='center' justify='center' h='37px' w='37px' border='3px solid #1190F2' borderRadius='100%'>
                                    <FaEthereum size='21px' m='1.5px 0 0 2px' />
                                </Flex>
                            </Flex>
                            <Flex align='center' gap='35px' mr='450px'>
                                <HiArrowNarrowRight className='arrow' size='25px' color='#00E8AC' filter='drop-shadow(0px 4px 5px rgba(0, 232, 172, 0.5))' />
                                <Text fontSize='16px'>74EKRJMXkhKDR5dj34578fgirwE22sfg</Text>
                            </Flex>
                            <Flex align='center' gap='35px'>
                                <Text fontSize='16px' fontWeight='700'>0.0085 ETH</Text>
                                <Flex className='status' align='center' justify='center' h='45px' w='110px' borderRadius='5px' fontSize='17px' fontWeight='700'>Completed</Flex>
                            </Flex>
                        </Flex>
                        <Flex className='transicition waiting' w='100%' h='67px' align='center' justify='space-between' color='white' p='0 20px 0 30px' bg='rgba(43, 38, 126, .3)' boxShadow='0px 4px 8px rgba(0, 0, 0, 0.05)' borderRadius='8px'>
                            <Flex align='center' gap='37px'>
                                <Text fontSize='17px' fontWeight='600'>AM 01:16</Text>
                                <Text fontSize='17px'>24 dec 2018</Text>
                                <Flex align='center' justify='center' h='37px' w='37px' border='3px solid #1190F2' borderRadius='100%'>
                                    <BsCurrencyBitcoin size='21px' m='1.5px 0 0 2px' />
                                </Flex>
                            </Flex>
                            <Flex align='center' gap='35px' mr='450px'>
                                <HiArrowNarrowRight className='arrow' size='25px' color='#00E8AC' filter='drop-shadow(0px 4px 5px rgba(0, 232, 172, 0.5))' />
                                <Text fontSize='16px'>74EKRJMXkhKDR5dj34578fgirwE22sfg</Text>
                            </Flex>
                            <Flex align='center' gap='35px'>
                                <Text fontSize='16px' fontWeight='700'>0.0085 BTC</Text>
                                <Flex className='status' align='center' justify='center' h='45px' w='110px' borderRadius='5px' fontSize='17px' fontWeight='700'>Waiting</Flex>
                            </Flex>
                        </Flex>
                        <Flex className='transicition completed' w='100%' h='67px' align='center' justify='space-between' color='white' p='0 20px 0 30px' bg='rgba(43, 38, 126, .3)' boxShadow='0px 4px 8px rgba(0, 0, 0, 0.05)' borderRadius='8px'>
                            <Flex align='center' gap='37px'>
                                <Text fontSize='17px' fontWeight='600'>AM 01:16</Text>
                                <Text fontSize='17px'>24 dec 2018</Text>
                                <Flex align='center' justify='center' h='37px' w='37px' border='3px solid #1190F2' borderRadius='100%'>
                                    <FaEthereum size='21px' m='1.5px 0 0 2px' />
                                </Flex>
                            </Flex>
                            <Flex align='center' gap='35px' mr='450px'>
                                <HiArrowNarrowRight className='arrow' size='25px' color='#00E8AC' filter='drop-shadow(0px 4px 5px rgba(0, 232, 172, 0.5))' />
                                <Text fontSize='16px'>74EKRJMXkhKDR5dj34578fgirwE22sfg</Text>
                            </Flex>
                            <Flex align='center' gap='35px'>
                                <Text fontSize='16px' fontWeight='700'>0.0085 ETH</Text>
                                <Flex className='status' align='center' justify='center' h='45px' w='110px' borderRadius='5px' fontSize='17px' fontWeight='700'>Completed</Flex>
                            </Flex>
                        </Flex>
                        <Flex className='transicition error' w='100%' h='67px' align='center' justify='space-between' color='white' p='0 20px 0 30px' bg='rgba(43, 38, 126, .3)' boxShadow='0px 4px 8px rgba(0, 0, 0, 0.05)' borderRadius='8px'>
                            <Flex align='center' gap='37px'>
                                <Text fontSize='17px' fontWeight='600'>AM 01:16</Text>
                                <Text fontSize='17px'>24 dec 2018</Text>
                                <Flex align='center' justify='center' h='37px' w='37px' border='3px solid #1190F2' borderRadius='100%'>
                                    <BsCurrencyBitcoin size='21px' m='1.5px 0 0 2px' />
                                </Flex>
                            </Flex>
                            <Flex align='center' gap='35px' mr='450px'>
                                <HiArrowNarrowRight className='arrow' size='25px' color='#00E8AC' filter='drop-shadow(0px 4px 5px rgba(0, 232, 172, 0.5))' />
                                <Text fontSize='16px'>74EKRJMXkhKDR5dj34578fgirwE22sfg</Text>
                            </Flex>
                            <Flex align='center' gap='35px'>
                                <Text fontSize='16px' fontWeight='700'>0.0085 BTC</Text>
                                <Flex className='status' align='center' justify='center' h='45px' w='110px' borderRadius='5px' fontSize='17px' fontWeight='700'>Waiting</Flex>
                            </Flex>
                        </Flex>
                        <Flex className='transicition error' w='100%' h='67px' align='center' justify='space-between' color='white' p='0 20px 0 30px' bg='rgba(43, 38, 126, .3)' boxShadow='0px 4px 8px rgba(0, 0, 0, 0.05)' borderRadius='8px'>
                            <Flex align='center' gap='37px'>
                                <Text fontSize='17px' fontWeight='600'>AM 01:16</Text>
                                <Text fontSize='17px'>24 dec 2018</Text>
                                <Flex align='center' justify='center' h='37px' w='37px' border='3px solid #1190F2' borderRadius='100%'>
                                    <FaEthereum size='21px' m='1.5px 0 0 2px' />
                                </Flex>
                            </Flex>
                            <Flex align='center' gap='35px' mr='450px'>
                                <HiArrowNarrowRight className='arrow' size='25px' color='#00E8AC' filter='drop-shadow(0px 4px 5px rgba(0, 232, 172, 0.5))' />
                                <Text fontSize='16px'>74EKRJMXkhKDR5dj34578fgirwE22sfg</Text>
                            </Flex>
                            <Flex align='center' gap='35px'>
                                <Text fontSize='16px' fontWeight='700'>0.0085 ETH</Text>
                                <Flex className='status' align='center' justify='center' h='45px' w='110px' borderRadius='5px' fontSize='17px' fontWeight='700'>Completed</Flex>
                            </Flex>
                        </Flex>
                        <Flex className='transicition waiting' w='100%' h='67px' align='center' justify='space-between' color='white' p='0 20px 0 30px' bg='rgba(43, 38, 126, .3)' boxShadow='0px 4px 8px rgba(0, 0, 0, 0.05)' borderRadius='8px'>
                            <Flex align='center' gap='37px'>
                                <Text fontSize='17px' fontWeight='600'>AM 01:16</Text>
                                <Text fontSize='17px'>24 dec 2018</Text>
                                <Flex align='center' justify='center' h='37px' w='37px' border='3px solid #1190F2' borderRadius='100%'>
                                    <BsCurrencyBitcoin size='21px' m='1.5px 0 0 2px' />
                                </Flex>
                            </Flex>
                            <Flex align='center' gap='35px' mr='450px'>
                                <HiArrowNarrowRight className='arrow' size='25px' color='#00E8AC' filter='drop-shadow(0px 4px 5px rgba(0, 232, 172, 0.5))' />
                                <Text fontSize='16px'>74EKRJMXkhKDR5dj34578fgirwE22sfg</Text>
                            </Flex>
                            <Flex align='center' gap='35px'>
                                <Text fontSize='16px' fontWeight='700'>0.0085 BTC</Text>
                                <Flex className='status' align='center' justify='center' h='45px' w='110px' borderRadius='5px' fontSize='17px' fontWeight='700'>Waiting</Flex>
                            </Flex>
                        </Flex>
                        <Flex className='transicition completed' w='100%' h='67px' align='center' justify='space-between' color='white' p='0 20px 0 30px' bg='rgba(43, 38, 126, .3)' boxShadow='0px 4px 8px rgba(0, 0, 0, 0.05)' borderRadius='8px'>
                            <Flex align='center' gap='37px'>
                                <Text fontSize='17px' fontWeight='600'>AM 01:16</Text>
                                <Text fontSize='17px'>24 dec 2018</Text>
                                <Flex align='center' justify='center' h='37px' w='37px' border='3px solid #1190F2' borderRadius='100%'>
                                    <FaEthereum size='21px' m='1.5px 0 0 2px' />
                                </Flex>
                            </Flex>
                            <Flex align='center' gap='35px' mr='450px'>
                                <HiArrowNarrowRight className='arrow' size='25px' color='#00E8AC' filter='drop-shadow(0px 4px 5px rgba(0, 232, 172, 0.5))' />
                                <Text fontSize='16px'>74EKRJMXkhKDR5dj34578fgirwE22sfg</Text>
                            </Flex>
                            <Flex align='center' gap='35px'>
                                <Text fontSize='16px' fontWeight='700'>0.0085 ETH</Text>
                                <Flex className='status' align='center' justify='center' h='45px' w='110px' borderRadius='5px' fontSize='17px' fontWeight='700'>Completed</Flex>
                            </Flex>
                        </Flex>
                        <Flex className='transicition error' w='100%' h='67px' align='center' justify='space-between' color='white' p='0 20px 0 30px' bg='rgba(43, 38, 126, .3)' boxShadow='0px 4px 8px rgba(0, 0, 0, 0.05)' borderRadius='8px'>
                            <Flex align='center' gap='37px'>
                                <Text fontSize='17px' fontWeight='600'>AM 01:16</Text>
                                <Text fontSize='17px'>24 dec 2018</Text>
                                <Flex align='center' justify='center' h='37px' w='37px' border='3px solid #1190F2' borderRadius='100%'>
                                    <BsCurrencyBitcoin size='21px' m='1.5px 0 0 2px' />
                                </Flex>
                            </Flex>
                            <Flex align='center' gap='35px' mr='450px'>
                                <HiArrowNarrowRight className='arrow' size='25px' color='#00E8AC' filter='drop-shadow(0px 4px 5px rgba(0, 232, 172, 0.5))' />
                                <Text fontSize='16px'>74EKRJMXkhKDR5dj34578fgirwE22sfg</Text>
                            </Flex>
                            <Flex align='center' gap='35px'>
                                <Text fontSize='16px' fontWeight='700'>0.0085 BTC</Text>
                                <Flex className='status' align='center' justify='center' h='45px' w='110px' borderRadius='5px' fontSize='17px' fontWeight='700'>Waiting</Flex>
                            </Flex>
                        </Flex>
                        <Flex className='transicition error' w='100%' h='67px' align='center' justify='space-between' color='white' p='0 20px 0 30px' bg='rgba(43, 38, 126, .3)' boxShadow='0px 4px 8px rgba(0, 0, 0, 0.05)' borderRadius='8px'>
                            <Flex align='center' gap='37px'>
                                <Text fontSize='17px' fontWeight='600'>AM 01:16</Text>
                                <Text fontSize='17px'>24 dec 2018</Text>
                                <Flex align='center' justify='center' h='37px' w='37px' border='3px solid #1190F2' borderRadius='100%'>
                                    <FaEthereum size='21px' m='1.5px 0 0 2px' />
                                </Flex>
                            </Flex>
                            <Flex align='center' gap='35px' mr='450px'>
                                <HiArrowNarrowRight className='arrow' size='25px' color='#00E8AC' filter='drop-shadow(0px 4px 5px rgba(0, 232, 172, 0.5))' />
                                <Text fontSize='16px'>74EKRJMXkhKDR5dj34578fgirwE22sfg</Text>
                            </Flex>
                            <Flex align='center' gap='35px'>
                                <Text fontSize='16px' fontWeight='700'>0.0085 ETH</Text>
                                <Flex className='status' align='center' justify='center' h='45px' w='110px' borderRadius='5px' fontSize='17px' fontWeight='700'>Completed</Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </NavbarHeader>
        </Box>
    );
}

export default Transictions;

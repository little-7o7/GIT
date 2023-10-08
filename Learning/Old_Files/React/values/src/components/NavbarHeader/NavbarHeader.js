import React from 'react';
import { Link as RouteLink } from "react-router-dom";
import { Box, Flex, Text, Heading, FormControl, InputGroup, InputLeftAddon, InputRightAddon, Input, Button, Link } from '@chakra-ui/react'
import { AiFillFund, AiOutlineSearch } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { FaWallet, FaExchangeAlt } from "react-icons/fa";
import { TbArrowsSort } from "react-icons/tb";
import { IoLogOutOutline } from "react-icons/io5";
import { BiEnvelope } from "react-icons/bi";
import { BsBell } from "react-icons/bs";

import './NavbarHeader.scss';

const NavbarHeader = ({ status, children }) => {
    return (
        <Flex className='NavbarHeader' h='100vh' bg='radial-gradient(46.41% 73.99% at 46.63% 48.05%, #20135C 0%, #140739 92.82%)'>
            <Flex className='Left' direction='column' justify='space-between' align='center' w='308.77px' p='25px 16px 0'>
                <Flex w='100%' direction='column' align='center' gap='5px'>
                    <RouteLink to='/login' _hover=''>
                        <Heading className='valuet_heading' fontSize='30' fontWeight='800' lineHeight='28px' opacity='0.8'>VALUET</Heading>
                        <Box h='2px' w='110px' bg='#1288E8' mt='4px'></Box>
                    </RouteLink>
                    <Flex w='100%' direction='column' align='center' marginTop='40px' gap='10px'>
                        <RouteLink to='/overview' style={{ width: '100%' }}>
                            <Flex className={`navButtons ${status.navStatus === 'overview' ? 'active' : ''}`} direction='column' align='center' justify='space-between' h='55px' w='100%' borderRadius='5px' cursor='pointer'>
                                <Flex h='100%' w='100%' align='center' pl='16px'>
                                    <CgMenuGridO className='text' color='#616A8B' size='32px' />
                                    <Text className='text' color='#616A8B' fontSize='16px' fontWeight='600' pl='16px'>Overview</Text>
                                </Flex>
                                <Box className='line' h='2px' w='98%' bg='#1288E8' mb='1px' borderRadius='1px' opacity='0'></Box>
                            </Flex>
                        </RouteLink>
                        <RouteLink to='/wallets' style={{ width: '100%' }}>
                            <Flex className={`navButtons ${status.navStatus === 'wallets' ? 'active' : ''}`} direction='column' align='center' justify='space-between' h='55px' w='100%' borderRadius='5px' cursor='pointer'>
                                <Flex h='100%' w='100%' align='center' pl='16px'>
                                    <FaWallet className='text' color='#616A8B' size='32px' />
                                    <Text className='text' color='#616A8B' fontSize='16px' fontWeight='600' pl='16px'>Wallets</Text>
                                </Flex>
                                <Box className='line' h='2px' w='98%' bg='#1288E8' mb='1px' borderRadius='1px' opacity='0'></Box>
                            </Flex>
                        </RouteLink>
                        <RouteLink to='/transictions' style={{ width: '100%' }}>
                            <Flex className={`navButtons ${status.navStatus === 'transictions' ? 'active' : ''}`} direction='column' align='center' justify='space-between' h='55px' w='100%' borderRadius='5px' cursor='pointer'>
                                <Flex h='100%' w='100%' align='center' pl='16px'>
                                    <TbArrowsSort className='text' color='#616A8B' size='32px' />
                                    <Text className='text' color='#616A8B' fontSize='16px' fontWeight='600' pl='16px'>Transictions</Text>
                                </Flex>
                                <Box className='line' h='2px' w='98%' bg='#1288E8' mb='1px' borderRadius='1px' opacity='0'></Box>
                            </Flex>
                        </RouteLink>
                        <RouteLink to='/exchange' style={{ width: '100%' }}>
                            <Flex className={`navButtons ${status.navStatus === 'exchange' ? 'active' : ''}`} direction='column' align='center' justify='space-between' h='55px' w='100%' borderRadius='5px' cursor='pointer'>
                                <Flex h='100%' w='100%' align='center' pl='16px'>
                                    <FaExchangeAlt className='text' color='#616A8B' size='32px' />
                                    <Text className='text' color='#616A8B' fontSize='16px' fontWeight='600' pl='16px'>Exchange</Text>
                                </Flex>
                                <Box className='line' h='2px' w='98%' bg='#1288E8' mb='1px' borderRadius='1px' opacity='0'></Box>
                            </Flex>
                        </RouteLink>
                        <RouteLink to='/market' style={{ width: '100%' }}>
                            <Flex className={`navButtons ${status.navStatus === 'market' ? 'active' : ''}`} direction='column' align='center' justify='space-between' h='55px' w='100%' borderRadius='5px' cursor='pointer'>
                                <Flex h='100%' w='100%' align='center' pl='16px'>
                                    <AiFillFund className='text' color='#616A8B' size='32px' />
                                    <Text className='text' color='#616A8B' fontSize='16px' fontWeight='600' pl='16px'>Market</Text>
                                </Flex>
                                <Box className='line' h='2px' w='98%' bg='#1288E8' mb='1px' borderRadius='1px' opacity='0'></Box>
                            </Flex>
                        </RouteLink>
                    </Flex>
                </Flex>
                <Flex w='100%' pb='20px' direction='column'>
                    <Box className='line' h='2px' w='100%' bg='#1288E8' mb='10px' borderRadius='1px'></Box>
                    <Flex w='100%' direction='column' gap='10px' >
                        <RouteLink to='#'>
                            <Flex className={`navButtons`} direction='column' align='center' justify='space-between' h='55px' w='100%' borderRadius='5px' cursor='pointer'>
                                <Flex h='100%' w='100%' align='center' pl='16px'>
                                    <Flex align='center' justify='center' h='35px' w='35px' border='2px solid #5FB2FF' borderRadius='100%'></Flex>
                                    <Text className='text' color='#616A8B' fontSize='16px' fontWeight='600' pl='16px'>Mike Jakson</Text>
                                </Flex>
                            </Flex>
                        </RouteLink>
                        <RouteLink to='/login'>
                            <Flex className={`navButtons`} direction='column' align='center' justify='space-between' h='55px' w='100%' borderRadius='5px' cursor='pointer'>
                                <Flex h='100%' w='100%' align='center' pl='16px'>
                                    <IoLogOutOutline className='text' color='#616A8B' size='32px' />
                                    <Text className='text' color='#616A8B' fontSize='16px' fontWeight='600' pl='20px'>Log out</Text>
                                </Flex>
                            </Flex>
                        </RouteLink>
                    </Flex>
                </Flex>
            </Flex>
            <Flex className='Right' direction='column' p='32px 32px 0' w='100%' h='100vh' overflow='hidden'>
                <Flex align='center' w='100%' justify='space-between'>
                    <InputGroup w='370px'>
                        <Input h='40px' fontSize='17px' borderRadius='25px' bg='#161245' border='none' color='white' focusBorderColor='none' />
                        <InputRightAddon h='40px' borderRadius='25px' bg='#161245' border='none'>
                            <AiOutlineSearch color='white' size='28px' />
                        </InputRightAddon>
                    </InputGroup>
                    <Flex className='message_bell' align='center' gap='13px' mr='5px'>
                        <RouteLink to='#'>
                            <Box className='message' position='relative'>
                                <Text pos='absolute' top='-5px' left='-6px' color='white' fontSize='12px' fontWeight='600' bg='#0097E8' h='16px' w='16px' textAlign='center' borderRadius='100%' filter='drop-shadow(0px 2px 4px rgba(85, 35, 221, 0.4))'>2</Text>
                                <BiEnvelope color='#54669C' size='29px' />
                            </Box>
                        </RouteLink>
                        <RouteLink to='#'>
                            <Box className='bell' position='relative'>
                                <Text pos='absolute' top='-7px' left='-5px' color='white' fontSize='12px' fontWeight='600' bg='#0097E8' h='16px' w='16px' textAlign='center' borderRadius='100%' filter='drop-shadow(0px 2px 4px rgba(85, 35, 221, 0.4))'>2</Text>
                                <BsBell color='#54669C' size='26px' />
                            </Box>
                        </RouteLink>
                    </Flex>
                </Flex>
                <Box width='100%' h='1px' bg='#2D317A' borderRadius='1px' mt='24px' />
                <Flex className='Children' direction='column'>
                    {children}
                </Flex>
            </Flex>
        </Flex>
    );
}

export default NavbarHeader;

import React, { useState, useRef, useEffect } from 'react';
import { AiFillEye, AiFillEyeInvisible, AiFillLock } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { Box, Flex, Text, Heading, FormControl, InputGroup, InputLeftAddon, InputRightAddon, Input, Button, Link } from '@chakra-ui/react'

import './Login.scss'

import Bg from '../../resources/img/Bg.png';
import Rectangle from '../../resources/img/LoginRectangle.png'
import Polygon from '../../resources/img/LoginPolygon.png'


const Login = ({ status }) => {
    useEffect(() => {
        status.setNavStatus('exchange')
    }, [])

    const [viewStatus, setViewStatus] = useState();
    const [passHide, setPassHide] = useState(true);
    const [FirstLineStatus, setFirstLineStatus] = useState(false);
    const [SecondLineStatus, setSecondLineStatus] = useState(false);

    const EmailInp = useRef();
    const PassInp = useRef();

    let passIcon = ''
    if (passHide === true) {
        passIcon = <AiFillEyeInvisible color='#616A8B' size='30px' />
    } else {
        passIcon = <AiFillEye color='#616A8B' size='30px' />
    }

    const focusInput = (inp) => {
        inp.current.focus();
    };

    const lineStatus = () => {
        setFirstLineStatus(EmailInp.current === document.activeElement)
        setSecondLineStatus(PassInp.current === document.activeElement)
    }

    const changeViewStatus = (status) => {
        console.log(status);
        setViewStatus(status)
    }

    const View = () => {
        if (!viewStatus) {
            return (
                <>
                    <InputGroup className='addon' onClick={lineStatus} borderBottom=''>
                        <InputLeftAddon bg='#2E3558' onClick={() => focusInput(EmailInp)} border='none' h='58px'>
                            <Flex align='center' justify='center' h='35px' w='35px' border='2px solid #5FB2FF' borderRadius='100%'>
                                <BsFillPersonFill size='22px' className='leftIcon' />
                            </Flex>
                        </InputLeftAddon>
                        <Input className='input1' type='text' ref={EmailInp} focusBorderColor='none' fontSize='16px' placeholder='E-mail or Login' bg='#2E3558;' border='none' h='58px' p='5px' w='310px' />
                    </InputGroup>
                    <Box h='2px' w='372px' borderRadius='10px' transition='.3s ease-in-out' bg='#1288E8' m='0 auto' mb='26px' opacity={FirstLineStatus === false ? '0' : '1'} />
                    <InputGroup onClick={lineStatus}>
                        <InputLeftAddon bg='#2E3558;' border='none' h='58px' onClick={() => focusInput(PassInp)}>
                            <Flex align='center' justify='center' h='35px' w='35px' border='2px solid #5FB2FF' borderRadius='100%'>
                                <AiFillLock size='22px' className='leftIcon' />
                            </Flex>
                        </InputLeftAddon>
                        <Input type={passHide === true ? 'password' : 'text'} ref={PassInp} focusBorderColor='none' fontSize='16px' placeholder='Password' bg='#2E3558;' border='none' h='58px' p='5px' w='250px' />
                        <InputRightAddon fontSize='25px' textAlign='center' bg='#2E3558' border='none' h='58px' w='62px' onClick={() => setPassHide(!passHide)} userSelect='none' cursor='pointer'>
                            {passIcon}
                        </InputRightAddon>
                    </InputGroup>
                    <Box h='2px' w='372px' borderRadius='10px' transition='.3s ease-in-out' bg='#1288E8' m='0 auto' mb='64px' opacity={SecondLineStatus === false ? '0' : '1'} />
                </>
            )
        } else if (viewStatus) {
            return (
                <>
                    <InputGroup className='addon' onClick={lineStatus} borderBottom=''>
                        <InputLeftAddon bg='#2E3558' onClick={() => focusInput(EmailInp)} border='none' h='58px'>
                            <Flex align='center' justify='center' h='35px' w='35px' border='2px solid #5FB2FF' borderRadius='100%'>
                                <BsFillPersonFill size='22px' className='leftIcon' />
                            </Flex>
                        </InputLeftAddon>
                        <Input className='input1' type='text' ref={EmailInp} focusBorderColor='none' fontSize='16px' placeholder='E-mail or Login' bg='#2E3558;' border='none' h='58px' p='5px' w='310px' />
                    </InputGroup>
                    <Box h='2px' w='372px' borderRadius='10px' transition='.3s ease-in-out' bg='#1288E8' m='0 auto' mb='26px' opacity={FirstLineStatus === false ? '0' : '1'} />
                    <InputGroup onClick={lineStatus}>
                        <InputLeftAddon bg='#2E3558;' border='none' h='58px' onClick={() => focusInput(PassInp)}>
                            <Flex align='center' justify='center' h='35px' w='35px' border='2px solid #5FB2FF' borderRadius='100%'>
                                <AiFillLock size='22px' className='leftIcon' />
                            </Flex>
                        </InputLeftAddon>
                        <Input type={passHide === true ? 'password' : 'text'} ref={PassInp} focusBorderColor='none' fontSize='16px' placeholder='Password' bg='#2E3558;' border='none' h='58px' p='5px' w='250px' />
                        <InputRightAddon fontSize='25px' textAlign='center' bg='#2E3558' border='none' h='58px' w='62px' onClick={() => setPassHide(!passHide)} userSelect='none' cursor='pointer'>
                            {passIcon}
                        </InputRightAddon>
                    </InputGroup>
                    <Box h='2px' w='372px' borderRadius='10px' transition='.3s ease-in-out' bg='#1288E8' m='0 auto' mb='64px' opacity={SecondLineStatus === false ? '0' : '1'} />
                    <InputGroup className='addon' onClick={lineStatus} borderBottom=''>
                        <InputLeftAddon bg='#2E3558' onClick={() => focusInput(EmailInp)} border='none' h='58px'>
                            <Flex align='center' justify='center' h='35px' w='35px' border='2px solid #5FB2FF' borderRadius='100%'>
                                <BsFillPersonFill size='22px' className='leftIcon' />
                            </Flex>
                        </InputLeftAddon>
                        <Input className='input1' type='text' ref={EmailInp} focusBorderColor='none' fontSize='16px' placeholder='E-mail or Login' bg='#2E3558;' border='none' h='58px' p='5px' w='310px' />
                    </InputGroup>
                    <Box h='2px' w='372px' borderRadius='10px' transition='.3s ease-in-out' bg='#1288E8' m='0 auto' mb='26px' opacity={FirstLineStatus === false ? '0' : '1'} />
                    <InputGroup onClick={lineStatus}>
                        <InputLeftAddon bg='#2E3558;' border='none' h='58px' onClick={() => focusInput(PassInp)}>
                            <Flex align='center' justify='center' h='35px' w='35px' border='2px solid #5FB2FF' borderRadius='100%'>
                                <AiFillLock size='22px' className='leftIcon' />
                            </Flex>
                        </InputLeftAddon>
                        <Input type={passHide === true ? 'password' : 'text'} ref={PassInp} focusBorderColor='none' fontSize='16px' placeholder='Password' bg='#2E3558;' border='none' h='58px' p='5px' w='250px' />
                        <InputRightAddon fontSize='25px' textAlign='center' bg='#2E3558' border='none' h='58px' w='62px' onClick={() => setPassHide(!passHide)} userSelect='none' cursor='pointer'>
                            {passIcon}
                        </InputRightAddon>
                    </InputGroup>
                    <Box h='2px' w='372px' borderRadius='10px' transition='.3s ease-in-out' bg='#1288E8' m='0 auto' mb='64px' opacity={SecondLineStatus === false ? '0' : '1'} />
                </>
            )
        }
    }

    return (
        <Flex className='Login' align='center' justify='space-between' bg={`url(${Bg})`} bgPosition='center' bgSize='2000px' w='100%' h='100vh' position='relative'>
            <Box bg={`url(${Rectangle}) no-repeat`} position='absolute' top='160px' left='660px' h='85px' w='85px' />
            <Box bg={`url(${Polygon}) no-repeat`} position='absolute' top='250px' left='140px' h='85px' w='85px' zIndex='4' />
            <Flex className='login-form-div' position='relative' direction='column' align='center' color='white' w='480px' h='595px' borderRadius='8px' mb='50px' ml='200px'>
                <Flex zIndex='2' align='center' direction='column' p='82px 0px 0px 0px'>
                    <Text fontSize='36px' fontWeight='500' lineHeight='42px' textShadow='0px 4px 20px rgba(1, 143, 255, 0.15)' mb='52px'>Welcome!</Text>
                    <FormControl>
                        <View />
                    </FormControl>
                    <Flex align='center' gap='32px'>
                        <Button className='form_button_1' onClick={() => changeViewStatus(false)} _hover='' color='#949EC0' borderRadius='8px'>SING UP</Button>
                        <Button className='form_button_2' onClick={() => changeViewStatus(true)} _hover='' borderRadius='8px'>SING IN</Button>
                    </Flex>
                    <Link href='/' fontSize='14px' color='#5FB2FF' mt='104px'>Forgot your password?</Link>
                </Flex>
            </Flex>
            <Flex direction='column' align='center' mr='330px'>
                <Heading className='valuet_heading' fontSize='72' fontWeight='800' lineHeight='85px' opacity='0.8'>VALUET</Heading>
                <Box h='2px' w='175px' bg='#1288E8' m='12px'></Box>
                <Text color='white' fontSize='24' fontWeight='300' textShadow='0px 4px 20px rgba(1, 143, 255, 0.15)'>Your currency dashboard</Text>
            </Flex>
        </Flex>
    );
}

export default Login;

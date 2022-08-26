import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Flex, Grid, GridItem, Text, Button, Input, InputGroup, InputRightAddon } from '@chakra-ui/react'

import '././Exchange.scss';
import NavbarHeader from '../../components/NavbarHeader/NavbarHeader';

const Exchange = ({ status }) => {
    const [currency1, setCurrency1] = useState("");
    const [currency2, setCurrency2] = useState("");
    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [rates, setRates] = useState({USD: 100, BTC: 21400});

    const API_KEY = "nwqzwfcaIXqRBhwuSaq5rFwVVPdeCzMY";

    useEffect(() => {
        axios
            .get(`https://api.apilayer.com/fixer/latest?base=USD&apikey=${API_KEY}`)
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    setRates(res.data.rates);
                }
            });
    }, []);

    function exchange() {
        setAmount2(amount1 * rates[currency2] / rates[currency1]);
    }

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
                        <Flex direction='column' justify='space-between' w='100%' h='330px' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)' borderRadius='10px' p='30px 30px' color='white'>
                            <Flex>
                                <Input list='list1' onChange={(e) => setCurrency1(e.target.value)} />
                                <datalist id='list1' onChange={(e) => setCurrency1(e.target.value)}>
                                    {Object.keys(rates).map((item, index) => <option value={item} key={index}>{item}</option>)}
                                </datalist>
                            </Flex>
                            <Flex direction='column'>
                                <InputGroup className='addon' borderBottom=''>
                                    <Input className='input1' value={amount1} onChange={(e) => setAmount1(e.target.value)} type='number' focusBorderColor='none' fontSize='21px' placeholder='number' bg='#2E3558;' border='none' h='50px' p='10px' w='100%' pr='0' />
                                    <InputRightAddon bg='#2E3558' border='none' h='50px'><Text m='0 auto'>{currency1}</Text></InputRightAddon>
                                </InputGroup>
                                <Box h='2px' w='100%' borderRadius='10px' transition='.3s ease-in-out' bg='#1288E8' m='0 auto' opacity='1' />
                            </Flex>
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={1} pt='10px'>
                        <Flex direction='column' justify='space-between' w='100%' h='330px' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)' borderRadius='10px' p='30px 30px' color='white'>
                            <Flex>
                                <Input list='list1' onChange={(e) => setCurrency2(e.target.value)} />
                                <datalist id='list1' onChange={(e) => setCurrency2(e.target.value)}>
                                    {Object.keys(rates).map((item, index) => <option value={item} key={index}>{item}</option>)}
                                </datalist>
                            </Flex>
                            <Flex direction='column'>
                                <InputGroup className='addon' borderBottom=''>
                                    <Input className='input1' value={amount2} onChange={(e) => setAmount2(e.target.value)} type='number' focusBorderColor='none' fontSize='21px' placeholder='number' bg='#2E3558;' border='none' h='50px' p='10px' w='100%' pr='0' />
                                    <InputRightAddon bg='#2E3558' border='none' h='50px'><Text m='0 auto'>{currency2}</Text></InputRightAddon>
                                </InputGroup>
                                <Box h='2px' w='100%' borderRadius='10px' transition='.3s ease-in-out' bg='#1288E8' m='0 auto' opacity='1' />
                            </Flex>
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={2} pt='30px'>
                        <Flex w='100%' h='180px' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) -153.98%, #0F0B38 140.59%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)' color='#fff'>
                            <Text>{`${amount1} ${currency1} '' ${amount2} ${currency2}`}</Text>
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={2} pt='30px'>
                        <Flex w='100%' justify='center' >
                            <Button color='white' fontSize='20px' fontWeight='600' p='12px 20px'
                                bg='linear-gradient(88.43deg, #1288E8 11.5%, #0097E8 76.7%)'
                                boxShadow='0px 4px 12px rgba(0, 0, 0, 0.15)' borderRadius='10px'
                                onClick={exchange}
                            >Exchange</Button>
                        </Flex>
                    </GridItem>
                </Grid>
            </NavbarHeader>
        </Box>
    );
}

export default Exchange;
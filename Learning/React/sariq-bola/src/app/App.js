import { Box, Flex, Heading, Text, Button, Link } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { BsTelegram } from 'react-icons/bs';

import './App.scss';

function App() {
    return (
        <Flex w='100%' gap='7' align='center' direction='column' className="App">
            <Box className='header'></Box>
            
            <Heading>Oliy ma'lumotsizlik ayb emas Oliy ma'lumotli bo'lishga harakat qilmaslik ayb.</Heading>

            <Flex direction='column' w='100%' fontSize='20' p='0 45px' gap='25px'>
                <Flex gap='1'>
                    <StarIcon color="gray" mr='1' mt='5px' />
                    <Text as='span'>
                        <Text as='span' color='red' fontWeight='700'>O'z yurtingizda</Text> Bir vaqtning ózida 2 ta Xalqaro Diplom oling!
                    </Text>
                </Flex>
                <Flex gap='1'>
                    <StarIcon color="gray" mr='1' mt='5px' />
                    <Text as='span'>Xalqaro toifadagi Moskva Moliya va Sanoat Universiteti "SINERGIYA" Yevropa va Osiyo
                        <Text as='span' color='red' fontWeight='700'>Top 1000</Text> talikdagi Universitet sizga bir vaqtning o'zida Rossiya Federatsiyasi va Yevropa diplomini taqdim etadi!👨‍🎓
                    </Text>
                </Flex>
                <Flex gap='1'>
                    <StarIcon color="gray" mr='1' mt='5px' />
                    <Text as='span'>Bu Xalqaro Ta'limga va Diplomga ega bo'lish uchun sizdan chet elga chiqishingiz talab qilinmaydi.</Text>
                </Flex>
                <Flex gap='1'>
                    <StarIcon color="gray" mr='1' mt='5px' />
                    <Text as='span' w='1800px'>Diplom ishga joylashishda muhim ahamiyatga ega bo'lgan bir davrda o'ylaymanki Xalqaro Standartlarga javob beradigan 2 ta Diplom bilan Universitetni tugatish sizga ko'plab Imkoniyatlar Eshigini Ochadi. Diplomingiz nafaqat O'zbekiston Hududida balki Yevropa va Osiyoda
                        <Text as='span' color='red' fontWeight='700' ml='1.5'>100% tan olinadi.</Text>
                    </Text>
                </Flex>
                <Flex gap='1'>
                    <StarIcon color="gray" mr='1' mt='5px' />
                    <Text as='span'>
                        Kompaniyamiz sizga talaba bo'lishingiz bilan birga SMM Marketing, Treding sohalariga oid darslarni taqdim etadi. Buning natijasida siz o'rgangan bilimlaringiz bilan KONTRAKT to'lovingizni O'ZINGGIZ to'laysiz, 4 yillik faoliyat 800dan ortiq talaba roziligi 100% kafolat!
                    </Text>
                </Flex>
            </Flex>

            <Heading fontSize='24' m='20px 0'>
                <Text as='span'>
                    <Text as='span' color='red'>SHOSHILING!</Text> Imkoniyatni qo'lga kiritish uchun RO'YXATDAN O'TISH tugmasini bosing👇🏻
                </Text>
            </Heading>

            <Link href='https://t.me/american_house_bot' _hover=''>
                <Button colorScheme='telegram' p='25px 20px' leftIcon={<BsTelegram style={{ height: '1.5em', width: '1.5em' }} />}>RO'YXATDAN O'TISH</Button>
            </Link>
        </Flex>
    );
}

export default App;

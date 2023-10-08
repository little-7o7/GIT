import { v4 as uuidv4 } from 'uuid';

const ContainersData = [
    {
        id: uuidv4(),
        position: 'bottom',
        background_color: '#F5F5F7',
        title: <span className="italic">Get <span className="pink">supercharged</span> for college.</span>,
        description: 'Save on Mac or iPad. Plus get a gift card up to $150.',
        links: [
            { id: uuidv4(), to: '/', text: 'Shop now' },
        ],
        img: 'https://www.apple.com/v/home/aq/images/heroes/back-to-school-2022/hero_bts__bcuslanw39xe_large.jpg',
    },
    {
        id: uuidv4(),
        position: 'right',
        background_color: '#FBFBFD',
        title: 'MacBook Air',
        description: <img src="https://www.apple.com/v/home/aq/images/logos/macbook-air/logo_hero_macbookair__edl9uovq56wm_large.png" alt="" />,
        links: [
            { id: uuidv4(), to: '/', text: 'Learn more' },
            { id: uuidv4(), to: '/', text: 'Buy' },
        ],
        img: 'https://www.apple.com/v/home/aq/images/heroes/macbook-air/hero_macbookair__el7scava26mq_large.png',
    },
    {
        id: uuidv4(),
        position: 'bottom',
        background_color: '#FBFBFD',
        title: 'iPhone 13',
        description: 'Your new superpower.',
        links: [
            { id: uuidv4(), to: '/', text: 'Learn more' },
            { id: uuidv4(), to: '/', text: 'Buy' },
        ],
        img: 'https://www.apple.com/v/home/aq/images/heroes/iphone-13/hero_iphone13_avail__gnqqkzuai6um_large.jpg',
    },
]

export default ContainersData;
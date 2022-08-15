import { v4 as uuidv4 } from 'uuid'

const MiniContainersData = [
    {
        id: uuidv4(),
        position: 'top',
        text_color: '#000',
        title: 'iPhone 13 Pro',
        description: 'Oh. Sp. Pro.',
        links: [
            { id: uuidv4(), to: '/', text: 'Learn more' },
            { id: uuidv4(), to: '/', text: 'Buy' },
        ],
        img: 'https://www.apple.com/v/home/aq/images/promos/iphone-13-pro/promo_iphone13pro_avail__beadms4ldidu_large.jpg',
        img_2x: 'https://www.apple.com/v/home/aq/images/promos/iphone-13-pro/promo_iphone13pro_avail__beadms4ldidu_large_2x.jpg',
    },
    {
        id: uuidv4(),
        position: 'top',
        text_color: '#FFF',
        title: 'MacBook Pro 13”',
        description: <img src="https://www.apple.com/v/home/aq/images/logos/macbook-pro-13/logo_promo_mbp13__gnmug5nsag66_large.png" alt="" />,
        links: [
            { id: uuidv4(), to: '/', text: 'Learn more' },
            { id: uuidv4(), to: '/', text: 'Buy' },
        ],
        img: 'https://www.apple.com/v/home/aq/images/promos/macbook-pro-13/promo_mbp13__buwssod6c8vm_large.jpg',
        img_2x: 'https://www.apple.com/v/home/aq/images/promos/macbook-pro-13/promo_mbp13__buwssod6c8vm_large_2x.jpg',
    },
    {
        id: uuidv4(),
        position: 'top',
        text_color: '#000',
        title: <img src="https://www.apple.com/v/home/aq/images/logos/watch-series-7/promo_logo_watch_lte__emrof7zzkriq_large.png" alt="" />,
        description: "It's our largest display yet.",
        links: [
            { id: uuidv4(), to: '/', text: 'Learn more' },
            { id: uuidv4(), to: '/', text: 'Buy' },
        ],
        img: 'https://www.apple.com/v/home/aq/images/promos/watch-series-7/promo_watch_lte__djeaso7ukrsm_large.jpg',
        img_2x: 'https://www.apple.com/v/home/aq/images/promos/watch-series-7/promo_watch_lte__djeaso7ukrsm_large_2x.jpg',
    },
    {
        id: uuidv4(),
        position: 'top',
        text_color: '#FFF',
        title: <img src="https://www.apple.com/v/home/aq/images/logos/ipad-air/promo_logo_ipadair__frwnnsqveeye_large.png" alt="" />,
        description: 'Light. Bright. Full of might',
        links: [
            { id: uuidv4(), to: '/', text: 'Learn more' },
            { id: uuidv4(), to: '/', text: 'Buy' },
        ],
        img: 'https://www.apple.com/v/home/aq/images/promos/ipad-air/promo_ipadair_avail__ferd4bfpcdm6_large.jpg',
        img_2x: 'https://www.apple.com/v/home/aq/images/promos/ipad-air/promo_ipadair_avail__ferd4bfpcdm6_large_2x.jpg',
    },
    {
        id: uuidv4(),
        position: 'top',
        text_color: '#000',
        title: <img src="https://www.apple.com/v/home/aq/images/logos/apple-card/logo__dcojfwkzna2q_large.png" alt="" />,
        description: 'Get up to 3% Daily Cash back with every purchase.',
        links: [
            { id: uuidv4(), to: '/', text: 'Learn more' },
            { id: uuidv4(), to: '/', text: 'Buy' },
        ],
        img: 'https://www.apple.com/v/home/aq/images/promos/apple-card/tile__cauwwcyyn9hy_large.jpg',
        img_2x: 'https://www.apple.com/v/home/aq/images/promos/apple-card/tile__cauwwcyyn9hy_large_2x.jpg',
    },
    {
        id: uuidv4(),
        position: 'bottom',
        text_color: '#FFF',
        title: 'AirPods',
        description: 'with Spatial Audio',
        links: [
            { id: uuidv4(), to: '/', text: 'Learn more' },
            { id: uuidv4(), to: '/', text: 'Buy' },
        ],
        img: 'https://www.apple.com/v/home/aq/images/promos/airpods-spatial/promo_airpods_spatial__cak1sq3kb1w2_large.jpg',
        img_2x: 'https://www.apple.com/v/home/aq/images/promos/airpods-spatial/promo_airpods_spatial__cak1sq3kb1w2_large_2x.jpg',
    },
]

export default MiniContainersData;

import { v4 as uuidv4 } from "uuid";

const Links = {
    shops: [
        { id: uuidv4(), to: '/', text: 'Store' },
        { id: uuidv4(), to: '/', text: 'Mac' },
        { id: uuidv4(), to: '/', text: 'iPad' },
        { id: uuidv4(), to: '/', text: 'iPhone' },
        { id: uuidv4(), to: '/', text: 'Watch' },
        { id: uuidv4(), to: '/', text: 'AirPods' },
        { id: uuidv4(), to: '/', text: 'TV & Home' },
        { id: uuidv4(), to: '/', text: 'AirTag' },
        { id: uuidv4(), to: '/', text: 'Accessories' },
        { id: uuidv4(), to: '/', text: 'Gift Cards' },
    ],
    services: [
        { id: uuidv4(), to: '/', text: 'Apple Music' },
        { id: uuidv4(), to: '/', text: 'Apple TV+' },
        { id: uuidv4(), to: '/', text: 'Apple Fitness+' },
        { id: uuidv4(), to: '/', text: 'Apple News+' },
        { id: uuidv4(), to: '/', text: 'Apple Arcade' },
        { id: uuidv4(), to: '/', text: 'iCloud' },
        { id: uuidv4(), to: '/', text: 'Apple One' },
        { id: uuidv4(), to: '/', text: 'Apple Card' },
        { id: uuidv4(), to: '/', text: 'Apple Books' },
        { id: uuidv4(), to: '/', text: 'Apple Podcasts' },
        { id: uuidv4(), to: '/', text: 'App Store' },
    ],
    account: [
        { id: uuidv4(), to: '/', text: 'Manage Your Apple ID' },
        { id: uuidv4(), to: '/', text: 'Apple Store Account' },
        { id: uuidv4(), to: '/', text: 'iCloud.com' },
    ],
    apple_store: [
        { id: uuidv4(), to: '/', text: 'Find a Store' },
        { id: uuidv4(), to: '/', text: 'Genius Bar' },
        { id: uuidv4(), to: '/', text: 'Today at Apple' },
        { id: uuidv4(), to: '/', text: 'Apple Camp' },
        { id: uuidv4(), to: '/', text: 'Apple Store App' },
        { id: uuidv4(), to: '/', text: 'Refurbished and Clearance' },
        { id: uuidv4(), to: '/', text: 'Financing' },
        { id: uuidv4(), to: '/', text: 'Apple Trade In' },
        { id: uuidv4(), to: '/', text: 'Order Status' },
        { id: uuidv4(), to: '/', text: 'Shopping Help' },
    ],
    for_business: [
        { id: uuidv4(), to: '/', text: 'Apple and Business' },
        { id: uuidv4(), to: '/', text: 'Shop for Business' },
    ],
    for_education: [
        { id: uuidv4(), to: '/', text: 'Apple and Education' },
        { id: uuidv4(), to: '/', text: 'Shop for K-12' },
        { id: uuidv4(), to: '/', text: 'Shop for College' },
    ],
    for_healthcare: [
        { id: uuidv4(), to: '/', text: 'Apple in Healthcare' },
        { id: uuidv4(), to: '/', text: 'Health on Apple Watch' },
        { id: uuidv4(), to: '/', text: 'Health Records on iPhone' },
    ],
    for_government: [
        { id: uuidv4(), to: '/', text: 'Shop for Government' },
        { id: uuidv4(), to: '/', text: 'Shop for Veterans and Military' },
    ],
    apple_values: [
        { id: uuidv4(), to: '/', text: 'Accessibility' },
        { id: uuidv4(), to: '/', text: 'Education' },
        { id: uuidv4(), to: '/', text: 'Environment' },
        { id: uuidv4(), to: '/', text: 'Inclusion and Diversity' },
        { id: uuidv4(), to: '/', text: 'Privacy' },
        { id: uuidv4(), to: '/', text: 'Racial Equity and Justice' },
        { id: uuidv4(), to: '/', text: 'Supplier Responsibility' },
    ],
    about_apple: [
        { id: uuidv4(), to: '/', text: 'Newsroom' },
        { id: uuidv4(), to: '/', text: 'Apple Leadership' },
        { id: uuidv4(), to: '/', text: 'Career Opportunities' },
        { id: uuidv4(), to: '/', text: 'Investors' },
        { id: uuidv4(), to: '/', text: 'Ethics & Compliance' },
        { id: uuidv4(), to: '/', text: 'Events' },
        { id: uuidv4(), to: '/', text: 'Contact Apple' },
    ]
};

export default Links;
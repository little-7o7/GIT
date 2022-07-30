import { v4 as uuidv4 } from 'uuid';

const AppBase = [
    {
        id: uuidv4(),
        name: 'Makhmudkhon',
        salary: 5000,
        like: false,
        increase: true
    },
    {
        id: uuidv4(),
        name: 'Mamurxon',
        salary: 200,
        like: true,
        increase: true
    },
    {
        id: uuidv4(),
        name: 'Madixon',
        salary: 500000,
        like: false,
        increase: false
    },
    {
        id: uuidv4(),
        name: 'Marifathon',
        salary: 10000,
        like: false,
        increase: true
    }
];

export default AppBase;
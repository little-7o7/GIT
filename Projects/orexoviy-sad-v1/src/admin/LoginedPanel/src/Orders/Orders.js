import React from 'react';

import { Helmet } from "react-helmet";
import favicon from '../../../../assets/img/favicon.png'

import './Orders.scss';

const Orders = () => {
    return (
        <div className='Orders'>
            <Helmet>
                <title>Orders</title>
                <link rel="icon" href={favicon} />
            </Helmet>
            Orders
        </div>
    );
}

export default Orders;

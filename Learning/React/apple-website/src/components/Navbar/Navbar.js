import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './Navbar.scss';

const linksArr = [
    {
        id: uuidv4(), content: 'img',
        children: 'https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg', to: '/'
    },
    { id: uuidv4(), content: 'text', children: 'Store', to: '/' },
    { id: uuidv4(), content: 'text', children: 'Mac', to: '/' },
    { id: uuidv4(), content: 'text', children: 'iPad', to: '/' },
    { id: uuidv4(), content: 'text', children: 'iPhone', to: '/' },
    { id: uuidv4(), content: 'text', children: 'Watch', to: '/' },
    { id: uuidv4(), content: 'text', children: 'AirPods', to: '/' },
    { id: uuidv4(), content: 'text', children: 'TV & Home', to: '/' },
    { id: uuidv4(), content: 'text', children: 'Only on Apple', to: '/' },
    { id: uuidv4(), content: 'text', children: 'Accessories', to: '/' },
    { id: uuidv4(), content: 'text', children: 'Support', to: '/' },
    {
        id: uuidv4(), content: 'img',
        children: 'https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_search_image__cbllq1gkias2_large.svg', to: '/'
    },
    {
        id: uuidv4(), content: 'img',
        children: 'https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg', to: '/'
    },
]

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="links">
                {linksArr.map(link => {
                    if (link.content === 'text') {
                        return (
                            <a key={link.id} href={link.to}>
                                <span>{link.children}</span>
                            </a>
                        )
                    } else {
                        return (
                            <a key={link.id} href={link.to}>
                                <img src={link.children} alt="" />
                            </a>
                        )
                    }
                })}
            </div>
        </div>
    );
}

export default Navbar;

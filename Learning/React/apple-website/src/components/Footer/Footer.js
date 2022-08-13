import React from 'react';

import Links from './Links';

import './Footer.scss';

console.log(<Links/>);

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="center">
                <div className="top"></div>
                <div className="links"></div>
                <div className="bottom"></div>
            </div>
        </div>
    );
}

export default Footer;